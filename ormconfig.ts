import { ConnectionOptions } from 'typeorm';

type TypeOrmModuleOptionsWithSeeds = ConnectionOptions & {
  seeds: string[];
  factories: string[];
};

const typeormConfig: TypeOrmModuleOptionsWithSeeds = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'studies',
  password: '321987654',
  database: 'db_studies',
  schema: 'course_world',
  synchronize: false,
  // migrationsRun: true,
  entities: ['dist/**/*.entity.{.ts,.js}'],
  migrations: ['dist/src/database/migrations/**/*{.ts,.js}'],
  // subscribers: ['dist/subscribers/**/*.ts'],
  cli: { migrationsDir: 'src/database/migrations' },
  seeds: ['dist/database/seeds/**/*.js'],
  factories: ['dist/database/factories/**/*.js'],
};

export default typeormConfig;
