import { inject, injectable } from 'tsyringe';

import { EatCategory } from '@modules/categories/infra/typeorm/entities/EatCategory';
import { IEatCategoryRepository } from '@modules/categories/repositories/IEatCategoryRepository';

@injectable()
class ListAllEatCategoriesUseCase {
  constructor(
    @inject('EatCategoryRepository')
    private eatCategoryRepository: IEatCategoryRepository
  ) {}
  async execute(): Promise<EatCategory[]> {
    const all = await this.eatCategoryRepository.list();
    return all;
  }
}
export { ListAllEatCategoriesUseCase };
