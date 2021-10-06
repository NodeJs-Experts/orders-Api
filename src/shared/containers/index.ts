import { container } from 'tsyringe';

import { AddressRepository } from '@modules/accounts/infra/typeorm/repositories/AddressRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IAddressRepository } from '@modules/accounts/repositories/IAddressRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { EatCategoryRepository } from '@modules/categories/infra/typeorm/repositories/EatCategoryRepository';
import { IEatCategoryRepository } from '@modules/categories/repositories/IEatCategoryRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository
);

container.registerSingleton<IEatCategoryRepository>(
  'EatCategoryRepository',
  EatCategoryRepository
);
