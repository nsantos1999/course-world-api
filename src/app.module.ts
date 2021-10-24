import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './configs/database/database.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PasswordModule } from './shared/modules/password/password.module';
import { LanguageModule } from './modules/language/language.module';
import { CourseModule } from './modules/course/course.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(DatabaseConfig),
    AuthModule,
    PasswordModule,
    LanguageModule,
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
