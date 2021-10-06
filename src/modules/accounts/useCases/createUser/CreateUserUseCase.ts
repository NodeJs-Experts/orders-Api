import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@errors/AppErrors';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUser';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    email,
    last_name,
    name,
    password,
    phone,
  }: ICreateUserDTO): Promise<User> {
    const passwordHash = await hash(password, 8);

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User Already exists!');
    }

    const create = await this.usersRepository.create({
      email,
      last_name,
      name,
      password: passwordHash,
      phone,
    });

    if (!create) {
      throw new AppError('Ocorreu um erro ao criar o usuário!');
    }

    return create;
  }
}

export { CreateUserUseCase };
