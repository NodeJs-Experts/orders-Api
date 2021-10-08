import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllEatCategoriesUseCase } from './ListAllEatCategoriesUseCase';

class ListAllEatCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllEatCategoriesUseCase = container.resolve(
      ListAllEatCategoriesUseCase
    );

    const all = await listAllEatCategoriesUseCase.execute();
    return response.status(200).json(all);
  }
}
export { ListAllEatCategoriesController };
