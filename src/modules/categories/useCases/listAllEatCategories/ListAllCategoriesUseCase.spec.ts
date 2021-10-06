import { IEatCategoryRepository } from '@modules/categories/repositories/IEatCategoryRepository';
import { EatCategoryRepositoryInMemory } from '@modules/categories/repositories/in-memory/EatCategoryRepositoryInMemory';

import { CreateEatCategoriesUseCase } from '../createEatCategories/CreateEatCategoriesUseCase';
import { ListAllEatCategoriesUseCase } from './ListAllCategoriesUseCase';

describe('List All Eat Categories', () => {
  let eatCategoryRepositoryInMemory: IEatCategoryRepository;
  let createEatCategoriesUseCase: CreateEatCategoriesUseCase;
  let listAllEatCategoriesUseCase: ListAllEatCategoriesUseCase;

  beforeEach(() => {
    eatCategoryRepositoryInMemory = new EatCategoryRepositoryInMemory();
    createEatCategoriesUseCase = new CreateEatCategoriesUseCase(
      eatCategoryRepositoryInMemory
    );
    listAllEatCategoriesUseCase = new ListAllEatCategoriesUseCase(
      eatCategoryRepositoryInMemory
    );
  });

  it('should be able to list all eat categories', async () => {
    await createEatCategoriesUseCase.execute({
      label: 'EatTest',
      description: 'Eat test',
    });

    const all = await eatCategoryRepositoryInMemory.list();

    expect(all.length).toBe(1);
  });
});
