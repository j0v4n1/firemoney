import UserModel from '../models/users';
import bcrypt from 'bcrypt';
import ApiError from '../errors/api-error';
import { createVerificationCode } from '../utils/common';
import { v4 as uuidv4 } from 'uuid';
import tokenService from './token-service';
import TokenService from './token-service';
import mailService from './mail-service';
import { UserData } from '../types/common';
import { UserDto } from '../dto/user-dto';
import dotenv from 'dotenv';
import TokenModel from '../models/token';
import * as process from 'node:process';
import { Types } from 'mongoose';

dotenv.config();

class UserService {
  async register(user: Omit<UserData, 'id'>) {
    const { password, email, number } = user;
    const emailCandidate = await UserModel.findOne({ email });
    if (emailCandidate) {
      throw ApiError.conflictError('Пользователь с таким email уже существует');
    }
    const newUSer = await UserModel.findOne({ number });
    if (!newUSer) {
      throw ApiError.serverSideError('ошибка при создание пользователя');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    newUSer.name = user.name;
    newUSer.lastName = user.lastName;
    newUSer.email = user.email;
    newUSer.password = hashedPassword;
    newUSer.createdAt = undefined;
    await newUSer.save();
    const userDto = new UserDto(newUSer);
    return { user: userDto };
  }

  async verifySmsCode(verificationCode: { verificationCode: number }) {
    const user = await UserModel.findOne(verificationCode);
    if (!user) {
      throw ApiError.badRequestError('Код подтверждения неверный или срок его действия истек');
    }
    user.isActivatedNumber = true;
    user.createdAt = undefined;
    await user.save();
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(user._id, tokens.refreshToken);
    return {
      user: { ...userDto, accessToken: tokens.accessToken },
      refreshToken: tokens.refreshToken,
    };
  }

  async createVerificationCode(number: string) {
    const numberCandidate = await UserModel.findOne({ number });
    if (numberCandidate) {
      if (numberCandidate.isActivatedNumber) {
        throw ApiError.conflictError('Пользователь с таким номером уже существует');
      }
      const verificationCode = createVerificationCode();
      numberCandidate.verificationCode = verificationCode;
      numberCandidate.createdAt = new Date();
      await numberCandidate.save();
      return { verificationCode };
    } else {
      const verificationCode = createVerificationCode();
      await UserModel.create({
        name: 'null',
        lastName: 'null',
        email: 'null',
        password: 'null',
        isActivatedNumber: false,
        isActivatedEmail: false,
        activationLink: 'null',
        verificationCode,
        number,
      });
      return { verificationCode };
    }
  }

  async sendActivationLink(email: string) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.notFoundError('Пользователь не найден');
    }
    const activationLink = uuidv4();
    user.activationLink = activationLink;
    user.createdAt = undefined;
    await user.save();
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/users/activate/${activationLink}`
    );
  }

  async activateEmail(activationLink: string) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.notFoundError('Пользователь не найден');
    }
    user.isActivatedEmail = true;
    user.createdAt = undefined;
    await user.save();
  }

  async logout(id: string) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw ApiError.notFoundError('Пользователь не найден');
    }
    const token = await TokenModel.findOne({ user: user._id });
    if (!token) {
      throw ApiError.notFoundError('Токен не найден');
    }
    await tokenService.deleteToken(token.refreshToken);
  }

  async login(number: string, password: string) {
    const user = await UserModel.findOne({ number });
    if (!user) {
      throw ApiError.notFoundError('Пользователь не найден');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw ApiError.conflictError('неверный пароль');
    }
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(user._id, tokens.refreshToken);
    return { ...userDto, refreshToken: tokens.refreshToken, accessToken: tokens.accessToken };
  }

  async authenticate(id: Types.ObjectId) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw ApiError.notFoundError('Пользователь не найден');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    return {
      user: { ...userDto, accessToken: tokens.accessToken },
      refreshToken: tokens.refreshToken,
    };
  }

  checkUserId(id: Types.ObjectId) {
    if (!id) {
      throw ApiError.unauthorizedError();
    }
    return id;
  }
}

export default new UserService();
