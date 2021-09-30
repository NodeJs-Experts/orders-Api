import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppErrors';
import { ICreateUserDTO } from '../../dtos/ICreateUser';
import { User } from '../../infra/typeorm/entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

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
