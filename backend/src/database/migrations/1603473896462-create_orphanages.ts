import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1603473896462 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
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
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10, //numeros depois da vírgula
          precision: 2 //numeros antes da vírgula
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2 
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        }  
      ] 
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }
}
