import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDrink1633516429832 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'drink',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'category_id', type: 'uuid' },
          { name: 'name', type: 'varchar' },
          { name: 'brand', type: 'varchar' },
          { name: 'description', type: 'varchar' },
          { name: 'price', type: 'numeric' },
        ],
        foreignKeys: [
          {
            name: 'FKDrinkCategory',
            referencedTableName: 'drink_categories',
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
    await queryRunner.dropTable('drink');
  }
}
