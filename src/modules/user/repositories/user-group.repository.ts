import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UserGroup } from '../entities/user-group.entity';

@Injectable()
@EntityRepository(UserGroup)
export class UserGroupRepository extends Repository<UserGroup> {}
