import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { User } from './User';

@Entity('address')
class Address {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  street: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  cep: string;

  @CreateDateColumn()
  created_at?: Date;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;
  // @Column()
  // user_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Address };
