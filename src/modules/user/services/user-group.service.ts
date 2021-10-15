import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserGroupRepository } from '../repositories/user-group.repository';

@Injectable()
export class UserGroupService {
  constructor(
    @InjectRepository(UserGroupRepository)
    private userGroupRepository: UserGroupRepository,
  ) {}

  async findOne(id: number) {
    const userGroup = await this.userGroupRepository.findOne(id);

    if (!userGroup) {
      throw new NotFoundException(`User group with id ${id} not found`);
    }

    return userGroup;
  }
}
