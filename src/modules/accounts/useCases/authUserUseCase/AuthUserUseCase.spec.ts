import { UserRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UserRepositoryInMemory';
import { AppError } from '@shared/errors/AppErrors';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthUserUseCase } from './AuthUserUseCase';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let authUserUseCase: AuthUserUseCase;

describe('Autenticação do Usuário', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authUserUseCase = new AuthUserUseCase(userRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('Should be able to authenticate an user!', async () => {
    const user = {
      name: 'test',
      last_name: 'test',
      password: '123',
      email: 'test@test.com',
      phone: '12345',
    };

    await createUserUseCase.execute(user);

    const result = await authUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
    expect(result).toHaveProperty('user');
  });

  it('Should not be able to authenticate a nonexistent user!', async () => {
    expect(async () => {
      await authUserUseCase.execute({
        email: 'email@test.com',
        password: '1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to authenticate an user!', async () => {
    expect(async () => {
      const user = {
        name: 'test',
        last_name: 'test',
        password: '123',
        email: 'test@test.com',
        phone: '12345',
      };

      await createUserUseCase.execute(user);

      await authUserUseCase.execute({
        email: user.email,
        password: '1289',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
