import { register, sendVerificationCode } from '../controllers/users';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/users/register', register);
usersRouter.post('/users/verification', sendVerificationCode);
usersRouter.post('/users/validation', sendVerificationCode);

export default usersRouter;
