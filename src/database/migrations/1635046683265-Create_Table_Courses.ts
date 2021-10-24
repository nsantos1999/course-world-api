import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableCourses1635046683265 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'courses',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal(7,2)',
          },
          {
            name: 'creator_user_id',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'current_timestamp',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'current_timestamp',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_courses_creator_user',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['creator_user_id'],
            onDelete: 'cascade',
            onUpdate: 'cascade',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('courses');
  }
}
