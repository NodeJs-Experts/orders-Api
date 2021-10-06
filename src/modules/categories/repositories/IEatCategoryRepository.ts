import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { EatCategory } from '../infra/typeorm/entities/EatCategory';

interface IEatCategoryRepository {
  create(data: ICreateCategoryDTO): Promise<EatCategory>;
  findByLabel(label: string): Promise<EatCategory>;
  list(): Promise<EatCategory[]>;
}

export { IEatCategoryRepository };
