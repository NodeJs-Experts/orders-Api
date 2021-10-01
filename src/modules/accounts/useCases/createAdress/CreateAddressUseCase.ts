import { inject, injectable } from 'tsyringe';

import { ICreateAddressDTO } from '@modules/accounts/dtos/ICreateAddressDTO';
import { Address } from '@modules/accounts/infra/typeorm/entities/Address';
import { IAddressRepository } from '@modules/accounts/repositories/IAddressRepository';

@injectable()
class CreateAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {}
  async execute({
    city,
    complement,
    district,
    name,
    number,
    state,
    street,
    cep,
  }: ICreateAddressDTO): Promise<Address> {
    const create = await this.addressRepository.create({
      city,
      complement,
      district,
      name,
      number,
      state,
      street,
      cep,
    });

    return create;
  }
}

export { CreateAddressUseCase };
