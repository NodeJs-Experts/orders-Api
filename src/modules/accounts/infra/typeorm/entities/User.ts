import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Address } from './Address';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany((type) => Address)
  @JoinTable({
    name: 'user_address',
    joinColumns: [{ name: 'user_id' }],
    inverseJoinColumns: [{ name: 'address_id' }],
  })
  addresses: Address[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
