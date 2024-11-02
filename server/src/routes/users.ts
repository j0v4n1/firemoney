import {
  register,
  sendVerificationCode,
  createUser,
  sendActivationLink,
} from '../controllers/users';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/users/register', register);
usersRouter.post('/users/verification', sendVerificationCode);
usersRouter.post('/users/verify', createUser);
usersRouter.post('/users/activation', sendActivationLink);
// usersRouter.post('/users/activate/:link', activateEmail);

export default usersRouter;
