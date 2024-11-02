import UserModel from '../models/users';
import bcrypt from 'bcrypt';
import ApiError from '../errors/api-error';
import { createVerificationCode } from '../utils/common';
import { v4 as uuidv4 } from 'uuid';
import tokenService from './token-service';
import mailService from './mail-service';
import { UserData } from '../types/common';
import { UserDto } from '../dto/user-dto';
import { Types } from 'mongoose';
import * as process from 'node:process';

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
    const tokens = tokenService.generateTokens({
      id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      number: user.number,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);
    const userDto = new UserDto(user);
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

  async authenticate(id: Types.ObjectId) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw ApiError.notFoundError('Пользователь не найден');
    }
    const userDto = new UserDto(user);
    const { isActivatedNumber, isActivatedEmail, ...payload } = userDto;
    const tokens = tokenService.generateTokens(payload);
    return {
      user: { ...userDto, accessToken: tokens.accessToken },
      refreshToken: tokens.refreshToken,
    };
  }

  async sendActivationLink(email: string) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.notFoundError('Пользователь не найден');
    }
    const activationLink = uuidv4();
    user.activationLink = activationLink;
    await user.save();
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/activate/${activationLink}`
    );
  }

  async activateEmail(activationLink: string) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.notFoundError('Пользователь не найден');
    }
    user.isActivatedEmail = true;
    await user.save();
    return { isActivatedEmail: user.isActivatedEmail };
  }
}

export default new UserService();
