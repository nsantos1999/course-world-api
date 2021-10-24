import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard';
import { LanguageRepository } from 'src/modules/language/repositories/language.repository';
import { LanguageService } from 'src/modules/language/services/language.service';
import { User } from 'src/modules/user/entities/user.entity';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CourseRepository } from '../repositories/course.repository';

@Injectable()
export class CourseService {
  constructor(
    private readonly languageService: LanguageService,
    private readonly userService: UserService,

    @InjectRepository(CourseRepository)
    private readonly courseRepository: CourseRepository,
  ) {}

  @UseGuards(JwtAuthGuard)
  async create(createCourseDto: CreateCourseDto, authUser: User) {
    const { name, description, price, languagesIds } = createCourseDto;

    const languagesFounded = await this.languageService.findByIds(languagesIds);

    const course = await this.courseRepository.save({
      name,
      description,
      price,
      languages: languagesFounded,
      creatorUser: authUser,
    });

    return course;
  }

  findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }

    return course;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  async remove(id: number) {
    const result = await this.courseRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Course with id ${id} not found to delete`);
    }

    return;
  }
}
