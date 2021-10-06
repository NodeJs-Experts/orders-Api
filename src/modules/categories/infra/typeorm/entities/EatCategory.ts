import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('eat_categories')
class EatCategory {
  @PrimaryColumn()
  id: string;
  @Column()
  label: string;
  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { EatCategory };
