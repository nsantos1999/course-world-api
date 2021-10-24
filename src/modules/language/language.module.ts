import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageRepository } from './repositories/language.repository';
import { LanguageService } from './services/language.service';

@Module({
  providers: [LanguageService],
  imports: [TypeOrmModule.forFeature([LanguageRepository])],
  exports: [
    LanguageModule,
    // LanguageService,
    TypeOrmModule.forFeature([LanguageRepository]),
  ],
})
export class LanguageModule {}
