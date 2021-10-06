import { ICreateCategoryDTO } from '@modules/categories/dtos/ICreateCategoryDTO';
import { EatCategory } from '@modules/categories/infra/typeorm/entities/EatCategory';

import { IEatCategoryRepository } from '../IEatCategoryRepository';

class EatCategoryRepositoryInMemory implements IEatCategoryRepository {
  repository: EatCategory[] = [];
  async create({
    label,
    description,
  }: ICreateCategoryDTO): Promise<EatCategory> {
    const eat = new EatCategory();
    Object.assign(eat, {
      label,
      description,
    });
    this.repository.push(eat);
    return eat;
  }
  async findByLabel(label: string): Promise<EatCategory> {
    return this.repository.find((eat) => eat.label === label);
  }
  async list(): Promise<EatCategory[]> {
    return this.repository;
  }
}

export { EatCategoryRepositoryInMemory };
