import { Injectable } from '@nestjs/common';
import { PasswordEncryptionService } from '../password-encryption.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordEncryptionBcryptService
  implements PasswordEncryptionService
{
  async encriptPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    const passwordEncrypted = await bcrypt.hash(password, saltOrRounds);

    return passwordEncrypted;
  }

  async validatePassword(
    password: string,
    passwordEncrypted: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, passwordEncrypted);
  }
}
