import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEatCategoriesUseCase } from './CreateEatCategoriesUseCase';

class CreateEatCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createEatCategoriesUseCase = container.resolve(
      CreateEatCategoriesUseCase
    );
    const { label, description } = request.body;
    const createEatCategory = await createEatCategoriesUseCase.execute({
      label,
      description,
    });

    return response.status(201).json(createEatCategory);
  }
}
export { CreateEatCategoriesController };
