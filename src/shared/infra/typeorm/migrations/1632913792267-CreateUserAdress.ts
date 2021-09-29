import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserAdress1632913792267 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_adress',
        columns: [
          { name: 'user_id', type: 'uuid' },
          { name: 'adress_id', type: 'uuid' },
          { name: 'name', type: 'varchar' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
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
            name: 'FKAdress',
            referencedTableName: 'adress',
            referencedColumnNames: ['id'],
            columnNames: ['adress_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_adress');
  }
}
