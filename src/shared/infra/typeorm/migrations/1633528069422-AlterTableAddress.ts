import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterTableAddress1633528069422 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'address',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
      })
    );
    await queryRunner.createForeignKey(
      'address',
      new TableForeignKey({
        name: 'FKUserAddress',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['user_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('address', 'user_id');
    await queryRunner.dropForeignKey('address', 'FKUserAddress');
  }
}
