import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserGroupRepository } from './repositories/user-group.repository';
import { UserRepository } from './repositories/user.repository';
import { UserGroupService } from './services/user-group.service';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserGroupService],
  imports: [TypeOrmModule.forFeature([UserGroupRepository, UserRepository])],
  exports: [TypeOrmModule],
})
export class UserModule {}
