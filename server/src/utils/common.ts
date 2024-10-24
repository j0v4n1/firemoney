import { Response } from 'express';
export const responseData = (res: Response, status: 'success' | 'failure', data?: {}) => {
  setTimeout(() => {
    res.json({ status, ...data });
  }, 3000);
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
