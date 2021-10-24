import '../environment.config';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

type TypeOrmModuleOptionsWithSeeds = TypeOrmModuleOptions & {
  seeds: any;
  factories: any;
};

export const DatabaseConfig: TypeOrmModuleOptionsWithSeeds = {
  type: process.env.DB_CONNECTION as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: process.env.DB_SCHEMA,
  sid: process.env.DB_SID,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/**/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: false,
  logging: true,
  cli: { migrationsDir: 'src/database/migrations' },
  seeds: ['dist/database/seeds/**/*.js'],
  factories: ['dist/database/factories/**/*.js'],
};
