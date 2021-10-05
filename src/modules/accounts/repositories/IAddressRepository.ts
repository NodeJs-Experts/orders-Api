import { ICreateAddressDTO } from '../dtos/ICreateAddressDTO';
import { Address } from '../infra/typeorm/entities/Address';

interface IAddressRepository {
  create(data: ICreateAddressDTO): Promise<Address>;
  findById(id: string): Promise<Address>;
  findByIds(ids: string[]): Promise<Address[]>;
}
export { IAddressRepository };
