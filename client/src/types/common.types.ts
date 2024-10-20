export type Response = {
  status: 'success' | 'failure';
  message?: string;
};

export type UserData = {
  name: string;
  lastName: string;
  email: string;
  number: string;
  password: string;
};

type VerificationCode = {
  code: number;
};

export type UserDataResponse = UserData & Response;

export type VerificationCodeResponse = Response & VerificationCode;
