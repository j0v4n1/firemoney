import { Types, Document } from 'mongoose';
import { User } from '../models/users';

export class UserDto {
  id: Types.ObjectId;
  name: string;
  lastName: string;
  email: string;
  number: string;
  isActivatedNumber: boolean;
  isActivatedEmail: boolean;

  constructor(user: Document & User & { _id: Types.ObjectId }) {
    this.id = user._id;
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
    this.number = user.number;
    this.isActivatedNumber = user.isActivatedNumber;
    this.isActivatedEmail = user.isActivatedEmail;
  }
}
