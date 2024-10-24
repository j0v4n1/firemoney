import { Schema, model } from 'mongoose';

export type User = {
  name: string;
  lastName: string;
  email: string;
  number: string;
  password: string;
  isActivatedEmail: boolean;
  isActivatedNumber: boolean;
  activationLink: string;
  verificationCode: number;
  createdAt: Date;
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
  isActivatedEmail: {
    type: Boolean,
    default: false,
  },
  isActivatedNumber: {
    type: Boolean,
    default: false,
  },
  activationLink: {
    type: String,
  },
  verificationCode: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 10,
  },
});

export default model<User>('user', UserSchema);
