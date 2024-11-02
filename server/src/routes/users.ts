import {
  register,
  sendVerificationCode,
  createUser,
  sendActivationLink,
  activateEmail,
} from '../controllers/users';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/users/register', register);
usersRouter.post('/users/verification', sendVerificationCode);
usersRouter.post('/users/verify', createUser);
usersRouter.post('/users/activation', sendActivationLink);
usersRouter.get('/users/activate/:link', activateEmail);

export default usersRouter;
