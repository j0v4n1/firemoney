import { Response } from 'express';
export const responseData = (res: Response, status: 'success' | 'failure', data?: any) => {
  setTimeout(() => {
    res.json({ status, data });
  }, 3000);
};

export const verificationCode = () => {
  let code = '';
  for (let i = 0; i <= 4; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return +code;
};
