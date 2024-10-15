import { NextFunction, Request, Response } from 'express';
import userService from '../service/user-service';
import { responseData } from '../utils/common';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.registration(req.body);
    return responseData(res, 'success', user);
  } catch (err) {
    next(err);
  }
};

export const sendVerificationCode = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const verificationCode = await userService.sendVerificationCode(req.body);
    return verificationCode;
  } catch (err) {
    next(err);
  }
};
