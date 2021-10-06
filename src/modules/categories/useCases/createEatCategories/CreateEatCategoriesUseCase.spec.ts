import { IEatCategoryRepository } from '@modules/categories/repositories/IEatCategoryRepository';
import { EatCategoryRepositoryInMemory } from '@modules/categories/repositories/in-memory/EatCategoryRepositoryInMemory';
import { AppError } from '@shared/errors/AppErrors';

import { CreateEatCategoriesUseCase } from './CreateEatCategoriesUseCase';

describe('Create eat category', () => {
  let eatCategoryRepositoryInMemory: IEatCategoryRepository;
  let createEatCategoriesUseCase: CreateEatCategoriesUseCase;

  beforeEach(() => {
    eatCategoryRepositoryInMemory = new EatCategoryRepositoryInMemory();
    createEatCategoriesUseCase = new CreateEatCategoriesUseCase(
      eatCategoryRepositoryInMemory
    );
  });

  it('should be able to create a new eat category', async () => {
    const create = await createEatCategoriesUseCase.execute({
      label: 'EatTest',
      description: 'Eat test',
    });
    expect(create).toHaveProperty('id');
  });
  it('should not be able to create a new category with same label', async () => {
    expect(async () => {
      await createEatCategoriesUseCase.execute({
        label: 'EatTest',
        description: 'Eat test',
      });
      await createEatCategoriesUseCase.execute({
        label: 'EatTest',
        description: 'Eat test',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
