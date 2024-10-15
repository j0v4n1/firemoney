import { Schema, model } from 'mongoose';

export type User = {
  name: string;
  lastName: string;
  email: string;
  number: string;
  password: string;
  isActivated: boolean;
  activationLink: string;
  verificationCode: number;
};

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  activationLink: {
    type: String,
  },
  verificationCode: {
    type: Number,
  },
});

export default model<User>('user', UserSchema);
