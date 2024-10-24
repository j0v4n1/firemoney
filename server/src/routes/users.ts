import { register, sendVerificationCode, createUser } from '../controllers/users';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/users/register', register);
usersRouter.post('/users/verification', sendVerificationCode);
usersRouter.post('/users/verify', createUser);

export default usersRouter;
