import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserOrders1633517433634 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_order',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'user_id', type: 'uuid' },
          { name: 'order_id', type: 'uuid' },
          { name: 'created_at', type: 'timestamp' },
        ],
        foreignKeys: [
          {
            name: 'FKUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKOrder',
            referencedTableName: 'order',
            referencedColumnNames: ['id'],
            columnNames: ['order_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_order');
  }
}
