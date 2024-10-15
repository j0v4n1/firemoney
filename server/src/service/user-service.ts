import UserModel, { User } from '../models/users';
import bcrypt from 'bcrypt';
import ApiError from '../errors/api-error';
import { verificationCode } from '../utils/common';

class UserService {
  async registration(user: User) {
    const { password, number, email, ...rest } = user;
    const emailCandidate = await UserModel.find({ email });
    if (emailCandidate) {
      return ApiError.conflictError('Пользователь с таким email уже существует');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUSer = await UserModel.create({ ...rest, number, password: hashedPassword });
    if (!newUSer) {
      throw ApiError.serverSideError('создание пользователя');
    }
    const { password: _, ...userWithoutPassword } = newUSer;
    return userWithoutPassword;
  }

  async sendVerificationCode(user: User) {
    const numberCandidate = await UserModel.find({ number: user.number });
    if (numberCandidate) {
      return ApiError.conflictError('Пользователь с таким номером уже существует');
    }
    return verificationCode();
  }
}

export default new UserService();
