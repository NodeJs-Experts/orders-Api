import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../../dtos/ICreateUser';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    email,
    last_name,
    name,
    password,
    phone,
  }: ICreateUserDTO): Promise<User> {
    const userCreate = this.repository.create({
      email,
      last_name,
      name,
      password,
      phone,
    });

    await this.repository.save(userCreate);
    return userCreate;
  }
}

export { UsersRepository };
