export type Response = {
  status: 'success' | 'failure';
  message?: string;
};

export type User = {
  id: string;
  name: string;
  lastName: string;
  number: string;
  email: string;
  password: string;
  isActivatedEmail: boolean;
  isActivatedNumber: boolean;
  accessToken: string;
};

type VerificationCode = {
  verificationCode: number;
};

export type UserResponse = Response & { user: Omit<User, 'password'> } & {
  refreshToken: string;
};

export type TokenResponse = Response & {
  accessToken: string;
};

export type JwtExpired = {
  status: 'failure';
  message: 'jwt expired';
};

export type NumberResponse = {
  number: string;
};

export type VerificationCodeResponse = VerificationCode & Response;
