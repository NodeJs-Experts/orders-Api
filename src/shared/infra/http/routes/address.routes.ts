import { Router } from 'express';

import { CreateAddressController } from '@modules/accounts/useCases/createAdress/CreateAddressController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createAddressController = new CreateAddressController();

const addressRoutes = Router();

addressRoutes.post('/', ensureAuthenticated, createAddressController.handle);

export { addressRoutes };
