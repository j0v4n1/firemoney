import { Response } from 'express';

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

export const saveCookie = (res: Response, token: string) =>
  res.cookie('refreshToken', token, {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
    httpOnly: true,
    sameSite: true,
  });
