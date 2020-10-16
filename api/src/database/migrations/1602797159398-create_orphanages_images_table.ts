import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrphanagesImagesTable1602797159398 implements MigrationInterface {
  async up(queryRunner: QueryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'orphanages_images',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'orphanageId',
            type: 'integer',
            unsigned: true
          },
          {
            name: 'filename',
            type: 'varchar'
          }
        ],
        foreignKeys: [
          {
            name: 'ImageOrphanage',
            columnNames: ['orphanageId'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        ]
      })
    );
  }

  async down(queryRunner: QueryRunner) {
    await queryRunner.dropTable('orphanages_images');
  }
}
