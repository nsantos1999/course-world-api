import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageModule } from '../language/language.module';
import { LanguageService } from '../language/services/language.service';
import { UserGroupService } from '../user/services/user-group.service';
import { UserService } from '../user/services/user.service';
import { UserModule } from '../user/user.module';
import { CourseController } from './controllers/course.controller';
import { CourseRepository } from './repositories/course.repository';
import { CourseService } from './services/course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService, LanguageService, UserService, UserGroupService],
  imports: [
    TypeOrmModule.forFeature([CourseRepository]),
    LanguageModule,
    UserModule,
  ],
})
export class CourseModule {}
