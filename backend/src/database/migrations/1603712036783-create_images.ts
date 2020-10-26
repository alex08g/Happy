import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1603712036783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'image',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, // nao pode ser negativo(a)
          isPrimary: true, // primary key 
          isGenerated: true, // geração automática
          generationStrategy: 'increment' //logica incremental
        },
        {
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'orphanage_id',
          type: 'integer',
        }
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('images');
  }
}
