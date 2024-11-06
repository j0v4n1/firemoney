import {
  register,
  sendVerificationCode,
  createUser,
  sendActivationLink,
  activateEmail,
  logout,
  login,
  refresh,
  authenticate,
} from '../controllers/users';
import AuthMiddleware from '../middlewares/auth';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/users/register', register);
usersRouter.post('/users/verification', sendVerificationCode);
usersRouter.post('/users/verify', createUser);
usersRouter.post('/users/activation', AuthMiddleware, sendActivationLink);
usersRouter.get('/users/activate/:link', activateEmail);
usersRouter.post('/users/logout', logout);
usersRouter.post('/users/login', login);
usersRouter.get('/users/refresh', refresh);
usersRouter.get('/users/auth', AuthMiddleware, authenticate);

export default usersRouter;
