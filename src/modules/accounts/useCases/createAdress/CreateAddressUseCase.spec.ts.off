import { AddressRepositoryInMemory } from '@modules/accounts/repositories/in-memory/AddressRepositoryInMemory';

import { CreateAddressUseCase } from './CreateAddressUseCase';

describe('Create a new adress', () => {
  let addressRepositoryInMemory: AddressRepositoryInMemory;
  let createAddressUseCase: CreateAddressUseCase;
  beforeEach(() => {
    addressRepositoryInMemory = new AddressRepositoryInMemory();
    createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);
  });

  it('shoube able to create a new address', async () => {
    const create = await createAddressUseCase.execute({
      cep: '83504570',
      city: 'Almirante',
      complement: 'casa1',
      district: 'cachoeira',
      name: 'casa',
      number: 107,
      state: 'PR',
      street: 'Nazilio Camargo',
    });
    expect(create).toHaveProperty('id');
  });
});
