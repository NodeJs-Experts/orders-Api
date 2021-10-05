import { getRepository, Repository } from 'typeorm';

import { ICreateAddressDTO } from '@modules/accounts/dtos/ICreateAddressDTO';
import { IAddressRepository } from '@modules/accounts/repositories/IAddressRepository';

import { Address } from '../entities/Address';

class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>;
  constructor() {
    this.repository = getRepository(Address);
  }
  async findByIds(ids: string[]): Promise<Address[]> {
    const addresses = await this.repository.findByIds(ids);
    return addresses;
  }
  async findById(id: string): Promise<Address> {
    const address = await this.repository.findOne(id);
    return address;
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
