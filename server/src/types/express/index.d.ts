import { Request } from 'express';
import { UserData } from '../common';

export type User = Omit<UserData, 'password'>;

export interface ExtendedRequest extends Request {
  user: User;
}

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

export {};
