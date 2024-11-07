import { NextFunction, Request, Response } from 'express';
import userService from '../service/user-service';
import { responseData, saveCookie } from '../utils/common';
import { UserData } from '../types/common';
import UserService from '../service/user-service';
import { ExtendedRequest } from '../types/express';
import tokenService from '../service/token-service';
import dotenv from 'dotenv';
import * as process from 'node:process';
import { JwtPayload } from 'jsonwebtoken';
import TokenService from '../service/token-service';

dotenv.config();

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
    saveCookie(res, user.refreshToken);
    const { refreshToken, ...userWithoutToken } = user;
    return responseData(res, 'success', { ...userWithoutToken });
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
    const userId = userService.checkUserId(req.user.id);
    const user = await userService.authenticate(userId);
    const { refreshToken, ...userWithoutRefreshToken } = user;
    saveCookie(res, user.refreshToken);
    return responseData(res, 'success', { ...userWithoutRefreshToken });
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
    await userService.activateEmail(req.params.link);
    return res.redirect('http://localhost:3000/dashboard');
  } catch (err) {
    next(err);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserService.logout(req.body.id);
    res.clearCookie('token');
    return responseData(res, 'success');
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { password, number } = req.body;
  try {
    const data = await UserService.login(number, password);
    const { refreshToken, ...rest } = data;
    saveCookie(res, refreshToken);
    return responseData(res, 'success', { user: { ...rest } });
  } catch (err) {
    next(err);
  }
};

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.cookies.refreshToken;
  try {
    token = TokenService.checkIsTokenProvided(token).replace('Bearer ', '');
    const user = tokenService.validateToken(token, process.env.JWT_SECRET_REFRESH) as JwtPayload;
    const userData = await UserService.authenticate(user.id);
    const { refreshToken } = userData;
    const accessToken = userData.user.accessToken;
    saveCookie(res, refreshToken);
    return responseData(res, 'success', { accessToken });
  } catch (err) {
    next(err);
  }
};
