import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAdress1632913306352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'adress',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'street', type: 'varchar' },
          { name: 'number', type: 'numeric' },
          { name: 'city', type: 'varchar' },
          { name: 'state', type: 'varchar' },
          { name: 'complement', type: 'varchar' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('adress');
  }
}
