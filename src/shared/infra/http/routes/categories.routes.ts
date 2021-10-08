import { Router } from 'express';

import { CreateEatCategoriesController } from '@modules/categories/useCases/createEatCategories/CreateEatCategoriesController';
import { ListAllEatCategoriesController } from '@modules/categories/useCases/listAllEatCategories/ListAllEatCategoriesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const listAllEatCategoriesController = new ListAllEatCategoriesController();
const createEatCategoriesController = new CreateEatCategoriesController();
const categoriesRoutes = Router();

categoriesRoutes.post(
  '/eat',
  ensureAuthenticated,
  createEatCategoriesController.handle
);

categoriesRoutes.get('/eat', listAllEatCategoriesController.handle);

export { categoriesRoutes };
