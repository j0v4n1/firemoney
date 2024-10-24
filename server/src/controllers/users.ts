import { NextFunction, Request, Response } from 'express';
import userService from '../service/user-service';
import { responseData } from '../utils/common';
import ApiError from '../errors/api-error';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.register(req.body);
    if (!user) {
      throw ApiError.serverSideError('ошибка при регистрации пользователя');
    }
    return responseData(res, 'success', { ...user });
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.verifySmsCode(req.body);
    if (!user) {
      throw ApiError.serverSideError('ошибка при поиске пользователя');
    }
    return responseData(res, 'success', { ...user });
  } catch (err) {
    next(err);
  }
};

export const sendVerificationCode = async (
  req: Request<{}, {}, { number: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { number } = req.body;
    const user = await userService.createVerificationCode(number);
    return responseData(res, 'success', { ...user });
  } catch (err) {
    next(err);
  }
};
