import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './configs/database/database.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PasswordModule } from './shared/modules/password/password.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(DatabaseConfig),
    AuthModule,
    PasswordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
