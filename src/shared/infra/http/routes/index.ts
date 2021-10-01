import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/address', addressRoutes);

export { routes };
