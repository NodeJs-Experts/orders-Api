import { Address } from '../infra/typeorm/entities/Address';

interface ICreateUserDTO {
  id?: string;
  addresses?: Address[];
  name: string;
  last_name: string;
  password: string;
  email: string;
  phone: string;
}

export { ICreateUserDTO };
