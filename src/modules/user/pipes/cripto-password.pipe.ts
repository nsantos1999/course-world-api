import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

export class CriptoPasswordPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(value);
    value.password = 'encripted-password';
    return value;
  }
}
