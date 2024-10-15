import ApiError from '../errors/api-error';
import { Response, Request, NextFunction } from 'express';

export default function (err: ApiError, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ApiError) {
    return res.json({ status: 'failure', statusCode: err.statusCode, message: err.message });
  }
  return res.status(500).send('Непредвиденная ошибка');
}
