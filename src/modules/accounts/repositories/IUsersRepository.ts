import { ICreateUserDTO } from '../dtos/ICreateUser';
import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository };
