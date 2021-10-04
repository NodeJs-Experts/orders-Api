import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { authRoutes } from './auth.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/address', addressRoutes);
routes.use(authRoutes);

export { routes };
