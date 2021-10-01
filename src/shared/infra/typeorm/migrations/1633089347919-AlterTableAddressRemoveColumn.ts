import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterTableAddressRemoveColumn1633089347919
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user_address', 'name');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'user_address',
      new TableColumn({
        name: 'name',
        type: 'varchar',
      })
    );
  }
}
