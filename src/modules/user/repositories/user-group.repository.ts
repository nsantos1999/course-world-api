import { EntityRepository, Repository } from 'typeorm';
import { UserGroup } from '../entities/user-group.entity';

@EntityRepository(UserGroup)
export class UserGroupRepository extends Repository<UserGroup> {}
