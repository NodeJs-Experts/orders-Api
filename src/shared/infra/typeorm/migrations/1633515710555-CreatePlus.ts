import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlus1633515710555 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'plus',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'label', type: 'varchar' },
          { name: 'price', type: 'numeric' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('plus');
  }
}
