import { NextFunction, Request, Response } from 'express';
import userService from '../service/user-service';
import { responseData } from '../utils/common';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.register(req.body);
    return responseData(res, 'success', user);
  } catch (err) {
    next(err);
  }
};

export const smsCodeValidation = async (req: Request, res: Response) => {
  const isValidNumber = await userService.smsCodeValidation(req.body);
  if (isValidNumber) {
    return responseData(res, 'success');
  }
  return responseData(res, 'failure');
};

export const sendVerificationCode = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const verificationCode = await userService.createVerificationCode(req.body);
    return responseData(res, 'success', verificationCode);
  } catch (err) {
    next(err);
  }
};
