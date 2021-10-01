import { container } from 'tsyringe';

import { AddressRepository } from '@modules/accounts/infra/typeorm/repositories/AddressRepository';
import { IAddressRepository } from '@modules/accounts/repositories/IAddressRepository';

import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository
);
