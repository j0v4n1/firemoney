import { NextFunction, Request, Response } from 'express';
import userService from '../service/user-service';
import { responseData, saveCookie } from '../utils/common';
import { UserData } from '../types/common';
import UserService from '../service/user-service';
import { ExtendedRequest } from '../types/express';
import tokenService from '../service/token-service';
import dotenv from 'dotenv';
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

export const createUser = async (
  req: Request<{}, {}, { verificationCode: number }>,
  res: Response,
  next: NextFunction
) => {
  const { verificationCode } = req.body;
  const endpoint = req.path;
  try {
    const user = await userService.verifySmsCode(verificationCode, endpoint);
    saveCookie(res, user.refreshToken!);
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
  const { number } = req.body;
  const endpoint = req.path;
  try {
    if (endpoint === '/users/verification') {
      const user = await userService.createTempUser(number);
      return responseData(res, 'success', { ...user });
    } else {
      const verificationCode = await UserService.createVerificationCode(number);
      return responseData(res, 'success', verificationCode);
    }
  } catch (error) {
    next(error);
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

export const resetPassword = async (
  req: Request<{}, {}, { verificationCode: number }>,
  res: Response,
  next: NextFunction
) => {
  const { verificationCode } = req.body;
  const endpoint = req.path;
  try {
    const number = await UserService.verifySmsCode(verificationCode, endpoint);
    console.log('5');
    return responseData(res, 'success', { ...number });
  } catch (error) {
    next(error);
  }
};

export const activateNewPassword = async (
  req: Request<{}, {}, { password: string; number: string }>,
  res: Response,
  next: NextFunction
) => {
  const { password, number } = req.body;
  try {
    await UserService.activateNewPassword(number, password);
    return responseData(res, 'success');
  } catch (error) {
    next(error);
  }
};
