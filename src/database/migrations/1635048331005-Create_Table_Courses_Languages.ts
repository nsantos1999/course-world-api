import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableCoursesLanguages1635048331005
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'courses_languages',
        columns: [
          {
            name: 'course_id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'language_id',
            type: 'integer',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            name: 'fk_courses_languages_course',
            referencedTableName: 'courses',
            referencedColumnNames: ['id'],
            columnNames: ['course_id'],
            onDelete: 'cascade',
            onUpdate: 'cascade',
          },
          {
            name: 'fk_courses_languages_language',
            referencedTableName: 'languages',
            referencedColumnNames: ['id'],
            columnNames: ['language_id'],
            onDelete: 'cascade',
            onUpdate: 'cascade',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('courses_languages');
  }
}
