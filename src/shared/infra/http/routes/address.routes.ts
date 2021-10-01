import { Router } from 'express';

import { CreateAddressController } from '@modules/accounts/useCases/createAdress/CreateAddressController';

const createAddressController = new CreateAddressController();

const addressRoutes = Router();

addressRoutes.post('/', createAddressController.handle);

export { addressRoutes };
