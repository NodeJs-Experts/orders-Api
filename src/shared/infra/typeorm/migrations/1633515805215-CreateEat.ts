import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEat1633515805215 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'eat',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'category_id', type: 'uuid' },
          { name: 'name', type: 'varchar' },
          { name: 'description', type: 'varchar' },
          { name: 'price', type: 'numeric' },
        ],
        foreignKeys: [
          {
            name: 'FKEatCategory',
            referencedTableName: 'eat_categories',
            referencedColumnNames: ['id'],
            columnNames: ['category_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('eat');
  }
}
