import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './configs/database/database.config';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(DatabaseConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
