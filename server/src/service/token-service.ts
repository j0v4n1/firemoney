import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Types } from 'mongoose';
import tokenModel from '../models/token';
import Token from '../models/token';
import ApiError from '../errors/api-error';
import { UserData } from '../types/common';
import * as process from 'node:process';

class TokenService {
  generateTokens(payload: Omit<UserData, 'password'>) {
    if (!process.env.JWT_SECRET_ACCESS || !process.env.JWT_SECRET_REFRESH) {
      throw ApiError.serverSideError('секретный ключ');
    }
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_ACCESS, {
      expiresIn: '20s',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_REFRESH, {
      expiresIn: '30d',
    });
    return {
      accessToken: `Bearer ${accessToken}`,
      refreshToken: `Bearer ${refreshToken}`,
    };
  }

  async saveToken(userId: Types.ObjectId, refreshToken: string) {
    const tokenData = await tokenModel.findById(userId);
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return await tokenData.save();
    }
    return await tokenModel.create({ user: userId, refreshToken });
  }

  async deleteToken(refreshToken: string) {
    const token = await Token.findOne({ refreshToken });
    if (!token) {
      throw ApiError.serverSideError('токен');
    }
    return token.deleteOne();
  }

  validateToken(token: string | undefined, secretKey: string | undefined) {
    if (!secretKey || !token) {
      throw ApiError.incorrectDataError('Нет refresh токена или проблема с секретным ключом');
    }
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      throw ApiError.conflictError('токен не верифицирован');
    }
  }

  checkIsTokenProvided(token: string | undefined) {
    if (!token) {
      throw ApiError.badRequestError('отсутствует токен');
    }
    return token;
  }
}

export default new TokenService();
