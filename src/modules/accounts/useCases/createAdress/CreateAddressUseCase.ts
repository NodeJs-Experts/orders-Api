import { inject, injectable } from 'tsyringe';

import { ICreateAddressDTO } from '@modules/accounts/dtos/ICreateAddressDTO';
import { Address } from '@modules/accounts/infra/typeorm/entities/Address';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IAddressRepository } from '@modules/accounts/repositories/IAddressRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppErrors';

interface IRequest {
  user_id: string;
  street: string;
  district: string;
  number: number;
  city: string;
  state: string;
  complement: string;
  name: string;
  cep: string;
}

@injectable()
class CreateAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    user_id,
    city,
    complement,
    district,
    name,
    number,
    state,
    street,
    cep,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists!');
    }
    const createAddress = await this.addressRepository.create({
      city,
      complement,
      district,
      name,
      number,
      state,
      street,
      cep,
    });

    const addresses = await this.addressRepository.findByIds([
      createAddress.id,
    ]);
    user.address = addresses;
    await this.usersRepository.create(user);
    return user;
  }
}

export { CreateAddressUseCase };
