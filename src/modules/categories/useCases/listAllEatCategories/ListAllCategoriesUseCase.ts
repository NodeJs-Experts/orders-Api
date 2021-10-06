import { EatCategory } from '@modules/categories/infra/typeorm/entities/EatCategory';
import { IEatCategoryRepository } from '@modules/categories/repositories/IEatCategoryRepository';

class ListAllEatCategoriesUseCase {
  constructor(private eatCategoryRepository: IEatCategoryRepository) {}
  async execute(): Promise<EatCategory[]> {
    const all = await this.eatCategoryRepository.list();
    return all;
  }
}
export { ListAllEatCategoriesUseCase };
