import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChangeGroupDto } from '../dto/change-group.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserGroupRepository } from '../repositories/user-group.repository';
import { UserRepository } from '../repositories/user.repository';
import { UserGroupEnum } from '../types/user-group.enum';
import { UserGroupService } from './user-group.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userGroupService: UserGroupService,

    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password, dateOfBirth } = createUserDto;

    const userGroup = await this.userGroupService.findOne(
      UserGroupEnum.STUDENT,
    );

    console.log(userGroup);
    return await this.userRepository.save({
      email,
      name,
      dateOfBirth,
      password,
      group: userGroup,
    });
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { name, email, password, dateOfBirth } = updateUserDto;

    const alreadyUser = await this.findOne(id);

    return await this.userRepository.save({
      id: alreadyUser.id,
      name,
      email,
      password,
      dateOfBirth,
    });
  }

  async changeGroup(id: number, changeGroupDto: ChangeGroupDto) {
    const { userGroupId } = changeGroupDto;

    const alreadyUser = await this.findOne(id);

    const userGroup = await this.userGroupService.findOne(userGroupId);

    return await this.userRepository.save({
      ...alreadyUser,
      group: userGroup,
    });
  }

  async remove(id: number) {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found to delete`);
    }
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return user;
  }
}
