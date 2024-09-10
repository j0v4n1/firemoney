import { Schema, model } from 'mongoose';

export type TUser = {
  email: string;
  password: string;
  isActivated: boolean;
  activationLink: string;
};

const UserSchema = new Schema<TUser>({
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
});

export default model<TUser>('user', UserSchema);
