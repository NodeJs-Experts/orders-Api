import { UserRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UserRepositoryInMemory';
import { AppError } from '@shared/errors/AppErrors';

import { CreateUserUseCase } from './CreateUserUseCase';

describe('Create User', () => {
  let userRepositoryInMemory: UserRepositoryInMemory;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('should be able create a new user', async () => {
    const user = await createUserUseCase.execute({
      email: 'test@test.com',
      last_name: 'test',
      name: 'Teste',
      password: '123',
      phone: '1234567812',
    });
    expect(user).toHaveProperty('id');
  });
  it('should not be able create a new user with the same email', async () => {
    expect(async () => {
      await createUserUseCase.execute({
        email: 'test@test.com',
        last_name: 'test',
        name: 'Teste',
        password: '123',
        phone: '1234567812',
      });
      const user = await createUserUseCase.execute({
        email: 'test@test.com',
        last_name: 'test',
        name: 'Teste',
        password: '123',
        phone: '1234567812',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
