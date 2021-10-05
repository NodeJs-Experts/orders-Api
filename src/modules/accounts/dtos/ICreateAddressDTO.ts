import { User } from '../infra/typeorm/entities/User';

interface ICreateAddressDTO {
  street: string;
  district: string;
  number: number;
  city: string;
  state: string;
  complement: string;
  name: string;
  cep: string;
}

export { ICreateAddressDTO };
