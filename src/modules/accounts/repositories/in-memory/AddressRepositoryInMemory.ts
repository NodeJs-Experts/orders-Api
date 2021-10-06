import { ICreateAddressDTO } from '@modules/accounts/dtos/ICreateAddressDTO';
import { Address } from '@modules/accounts/infra/typeorm/entities/Address';

import { IAddressRepository } from '../IAddressRepository';

class AddressRepositoryInMemory implements IAddressRepository {
  repository: Address[] = [];
  async create({
    city,
    complement,
    district,
    name,
    number,
    state,
    street,
    cep,
  }: ICreateAddressDTO): Promise<Address> {
    const address = new Address();

    Object.assign(address, {
      city,
      complement,
      district,
      name,
      number,
      state,
      street,
      cep,
    });

    this.repository.push(address);
    return address;
  }
  findById(id: string): Promise<Address> {
    throw new Error('Method not implemented.');
  }
  findByIds(ids: string[]): Promise<Address[]> {
    throw new Error('Method not implemented.');
  }
}

export { AddressRepositoryInMemory };
