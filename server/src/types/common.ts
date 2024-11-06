import { Types } from 'mongoose';

export type UserData = {
  id: Types.ObjectId;
  name: string;
  lastName: string;
  email: string;
  number: string;
  password: string;
  isActivatedNumber: boolean;
  isActivatedEmail: boolean;
};
