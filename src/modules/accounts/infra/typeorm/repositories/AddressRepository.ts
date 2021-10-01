import { getRepository, Repository } from 'typeorm';

import { ICreateAddressDTO } from '@modules/accounts/dtos/ICreateAddressDTO';
import { IAddressRepository } from '@modules/accounts/repositories/IAddressRepository';

import { Address } from '../entities/Address';

class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>;
  constructor() {
    this.repository = getRepository(Address);
  }
  async create({
    cep,
    city,
    complement,
    district,
    name,
    number,
    state,
    street,
  }: ICreateAddressDTO): Promise<Address> {
    const create = this.repository.create({
      cep,
      city,
      complement,
      district,
      name,
      number,
      state,
      street,
    });

    await this.repository.save(create);

    return create;
  }
}

export { AddressRepository };
