import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUser';
import { User } from '@modules/accounts/infra/typeorm/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class UserRepositoryInMemory implements IUsersRepository {
  user: User[] = [];

  async create({
    email,
    last_name,
    name,
    password,
    phone,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      email,
      last_name,
      name,
      password,
      phone,
    });

    this.user.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.user.find((userEmail) => userEmail.email === email);
  }
}

export { UserRepositoryInMemory };
