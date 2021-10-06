import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../../dtos/ICreateUser';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { Address } from '../entities/Address';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
  async create({
    id,
    addresses,
    email,
    last_name,
    name,
    password,
    phone,
  }: ICreateUserDTO): Promise<User> {
    const userCreate = this.repository.create({
      id,
      addresses,
      email,
      last_name,
      name,
      password,
      phone,
    });

    await this.repository.save(userCreate);
    return userCreate;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };
