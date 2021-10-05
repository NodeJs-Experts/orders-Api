import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEatCategories1633434770152 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'eat_categories',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'label', type: 'varchar' },
          { name: 'description', type: 'varchar' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('eat_categories');
  }
}
