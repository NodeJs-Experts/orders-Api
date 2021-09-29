import { inject, injectable } from 'tsyringe';

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
    const create = await this.usersRepository.create({
      email,
      last_name,
      name,
      password,
      phone,
    });

    if (!create) {
      throw new Error('Ocorreu um erro ao criar o usuário!');
    }

    return create;
  }
}

export { CreateUserUseCase };
