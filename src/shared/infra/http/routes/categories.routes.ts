import { Router } from 'express';

import { CreateEatCategoriesController } from '@modules/categories/useCases/createEatCategories/CreateEatCategoriesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createEatCategoriesController = new CreateEatCategoriesController();
const categoriesRoutes = Router();

categoriesRoutes.post(
  '/eat',
  ensureAuthenticated,
  createEatCategoriesController.handle
);

export { categoriesRoutes };
