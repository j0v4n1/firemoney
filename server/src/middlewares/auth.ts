import { Response, Request, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import { responseData } from '../utils/common';
import { User } from 'types/express';
import dotenv from 'dotenv';

dotenv.config();

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return responseData(res, 'failure', '', 10000);
  }
  const token = authorization.replace('Bearer ', '');
  let payload: string | JwtPayload | User;
  if (!process.env.JWT_SECRET) {
    return responseData(res, 'failure', { message: 'Проблема с секретным ключом' });
  }
  try {
    payload = verify(token, process.env.JWT_SECRET);
    req.user = payload as User;
    next();
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : 'Непредвиденная ошибка при проверке токена';
    return responseData(res, 'failure', { message: errorMessage });
  }
};
