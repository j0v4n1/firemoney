import { Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const responseData = (
  res: Response,
  status: 'success' | 'failure',
  data?: {},
  ms = 3000
) => {
  setTimeout(() => {
    res.json({ status, ...data });
  }, ms);
};

export const createVerificationCode = () => {
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += Math.floor(Math.random() * 10);
    if (code === '0' && i === 0) {
      code = '1';
    }
  }
  return +code;
};
