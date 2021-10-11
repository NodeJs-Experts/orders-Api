import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AlterTableOrder1633516510848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'order',
      new TableForeignKey({
        name: 'FKEat',
        referencedTableName: 'eat',
        referencedColumnNames: ['id'],
        columnNames: ['eat_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'order',
      new TableForeignKey({
        name: 'FKPlus',
        referencedTableName: 'plus',
        referencedColumnNames: ['id'],
        columnNames: ['plus_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'order',
      new TableForeignKey({
        name: 'FKDrink',
        referencedTableName: 'drink',
        referencedColumnNames: ['id'],
        columnNames: ['drink_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('order', 'FKEat');
    await queryRunner.dropForeignKey('order', 'FKPlus');
    await queryRunner.dropForeignKey('order', 'FKDrink');
  }
}
