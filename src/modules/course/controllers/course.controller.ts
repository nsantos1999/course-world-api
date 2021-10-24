import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtPayload } from 'src/modules/auth/@types/payload.types';
import { AuthUser } from 'src/modules/auth/decorators/auth-user.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard';
import { User } from 'src/modules/user/entities/user.entity';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CourseService } from '../services/course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCourseDto: CreateCourseDto, @AuthUser() authUser: User) {
    console.log(authUser);
    return this.courseService.create(createCourseDto, authUser);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
