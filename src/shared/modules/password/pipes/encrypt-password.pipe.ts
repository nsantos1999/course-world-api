import { Inject, PipeTransform } from '@nestjs/common';
import { EncryptPasswordGenericDto } from '../dto/encrypt-password-generic.dto';
import { PasswordEncryptionService } from '../services/password-encryption.service';

export class EncryptPasswordPipe implements PipeTransform {
  constructor(
    @Inject('PasswordEncryptionService')
    private passwordEncryptionService: PasswordEncryptionService,
  ) {}

  async transform(value: EncryptPasswordGenericDto) {
    value.password = await this.passwordEncryptionService.encriptPassword(
      value.password,
    );
    return value;
  }
}
