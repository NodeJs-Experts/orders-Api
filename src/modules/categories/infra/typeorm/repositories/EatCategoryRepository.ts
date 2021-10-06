import { getRepository, Repository } from 'typeorm';

import { ICreateCategoryDTO } from '@modules/categories/dtos/ICreateCategoryDTO';
import { IEatCategoryRepository } from '@modules/categories/repositories/IEatCategoryRepository';

import { EatCategory } from '../entities/EatCategory';

class EatCategoryRepository implements IEatCategoryRepository {
  private repository: Repository<EatCategory>;
  constructor() {
    this.repository = getRepository(EatCategory);
  }
  async list(): Promise<EatCategory[]> {
    const all = await this.repository.find();
    return all;
  }
  async create({
    label,
    description,
  }: ICreateCategoryDTO): Promise<EatCategory> {
    const eatCategory = this.repository.create({ label, description });
    await this.repository.save(eatCategory);
    return eatCategory;
  }
  async findByLabel(label: string): Promise<EatCategory> {
    const category = await this.repository.findOne({ label });
    return category;
  }
}

export { EatCategoryRepository };
