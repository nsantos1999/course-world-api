import { Global, Module } from '@nestjs/common';
import { providersConfig } from './configs/providers.config';

@Global()
@Module({
  providers: [providersConfig.PasswordEncryptionService],
  exports: [providersConfig.PasswordEncryptionService],
})
export class PasswordModule {}
