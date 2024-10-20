import UserModel, { User } from '../models/users';
import bcrypt from 'bcrypt';
import ApiError from '../errors/api-error';
import { createVerificationCode } from '../utils/common';

class UserService {
  async register(user: User) {
    const { password, number, email, ...rest } = user;
    const emailCandidate = await UserModel.findOne({ email });
    if (emailCandidate) {
      throw ApiError.conflictError('Пользователь с таким email уже существует');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUSer = await UserModel.create({ ...rest, number, password: hashedPassword });
    if (!newUSer) {
      throw ApiError.serverSideError('создание пользователя');
    }
    const { password: _, ...userWithoutPassword } = newUSer;
    return userWithoutPassword;
  }

  async verifySmsCode(verificationCode: { verificationCode: number }) {
    const user = await UserModel.findOne(verificationCode);
    if (!user) {
      return false;
    }
    return true;
  }

  async createVerificationCode(number: { number: string }) {
    const numberCandidate = await UserModel.findOne(number);
    if (numberCandidate) {
      throw ApiError.conflictError('Пользователь с таким номером уже существует');
    }
    const verificationCode = createVerificationCode();
    await UserModel.create({
      name: 'null',
      lastName: 'null',
      email: 'null',
      password: 'null',
      isActivated: false,
      activationLink: 'null',
      verificationCode,
      number: number.number,
    });
    return verificationCode;
  }
}

export default new UserService();
