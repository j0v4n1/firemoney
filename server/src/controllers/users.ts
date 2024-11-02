import { NextFunction, Request, Response } from 'express';
import userService from '../service/user-service';
import { responseData } from '../utils/common';
import { UserData } from '../types/common';
import { ExtendedRequest } from '../types/express';

export const register = async (
  req: Request<{}, {}, Omit<UserData, 'id'>>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.register(req.body);
    return responseData(res, 'success', { ...user });
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.verifySmsCode(req.body);
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

export const authenticate = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user.id) {
      return;
    }
    const user = await userService.authenticate(req.user.id);
    return responseData(res, 'success', { ...user });
  } catch (err) {
    next(err);
  }
};

export const sendActivationLink = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userService.sendActivationLink(req.body.email);
    return responseData(res, 'success');
  } catch (err) {
    next(err);
  }
};

export const activateEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.params.link);
    await userService.activateEmail(req.params.link);
    return res.redirect('http://localhost:3000/dashboard');
  } catch (err) {
    next(err);
  }
};
