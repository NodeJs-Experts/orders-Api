import { inject, injectable } from 'tsyringe';

import { ICreateCategoryDTO } from '@modules/categories/dtos/ICreateCategoryDTO';
import { EatCategory } from '@modules/categories/infra/typeorm/entities/EatCategory';
import { IEatCategoryRepository } from '@modules/categories/repositories/IEatCategoryRepository';
import { AppError } from '@shared/errors/AppErrors';

@injectable()
class CreateEatCategoriesUseCase {
  constructor(
    @inject('EatCategoryRepository')
    private eatCategoryRepository: IEatCategoryRepository
  ) {}
  async execute({
    label,
    description,
  }: ICreateCategoryDTO): Promise<EatCategory> {
    const eatCategoryAlreadyExists =
      await this.eatCategoryRepository.findByLabel(label);

    if (eatCategoryAlreadyExists) {
      throw new AppError('Eat category already exists');
    }
    const category = await this.eatCategoryRepository.create({
      label,
      description,
    });
    return category;
  }
}
export { CreateEatCategoriesUseCase };
