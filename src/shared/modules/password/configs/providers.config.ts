import { PasswordEncryptionBcryptService } from '../services/implementations/password-encryption-bcrypt.service';

export const providersConfig = {
  PasswordEncryptionService: {
    provide: 'PasswordEncryptionService',
    useClass: PasswordEncryptionBcryptService,
  },
};
