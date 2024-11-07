import { Response, Request, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import { responseData } from '../utils/common';
import { User } from 'types/express';
import dotenv from 'dotenv';
import ApiError from '../errors/api-error';

dotenv.config();

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw ApiError.unauthorizedError();
  }
  const token = authorization.replace('Bearer ', '');
  let payload: string | JwtPayload | User;
  if (!process.env.JWT_SECRET_ACCESS) {
    return responseData(res, 'failure', { message: 'Проблема с секретным ключом' });
  }
  try {
    payload = verify(token, process.env.JWT_SECRET_ACCESS);
    req.user = payload as User;
    next();
  } catch (error: any) {
    throw ApiError.unauthorizedError();
  }
};
