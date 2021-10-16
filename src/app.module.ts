import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './configs/database/database.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(DatabaseConfig), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
