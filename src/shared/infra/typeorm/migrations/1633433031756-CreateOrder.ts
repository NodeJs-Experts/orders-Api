import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrder1633433031756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'order',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'description', type: 'varchar' },
          { name: 'status', type: 'varchar' },
          { name: 'payment_type', type: 'varchar' },
          { name: 'drink_id', type: 'uuid' },
          { name: 'eat_id', type: 'uuid' },
          { name: 'plus_id', type: 'uuid' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('order');
  }
}
