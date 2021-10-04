import { Router } from 'express';

import { AuthUserController } from '@modules/accounts/useCases/authUserUseCase/AuthUserController';

const authUserController = new AuthUserController();
const authRoutes = Router();

authRoutes.post('/session', authUserController.handle);

export { authRoutes };
