import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindLanguageByInitialsDto } from '../dto/find-language-by-initials.dto';
import { LanguageRepository } from '../repositories/language.repository';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(LanguageRepository)
    private readonly languageRepository: LanguageRepository,
  ) {}

  async findByIds(languagesIds: number[]) {
    const languages = await this.languageRepository.find({
      where: { id: languagesIds },
    });

    const languagesIdNotFound = languagesIds.filter(
      (languageId) =>
        !languages.map((language) => language.id).includes(languageId),
    );

    if (languagesIdNotFound.length > 0) {
      throw new NotFoundException(
        `Languages with ids ${languagesIdNotFound.join(',')} not found`,
      );
    }

    return languages;
  }

  async findByInitials(findByInitials: FindLanguageByInitialsDto[]) {
    const languages = await Promise.all(
      findByInitials.map(async ({ initials }) => {
        const language = await this.languageRepository.findOne({
          initials,
        });

        if (!language) {
          throw new NotFoundException(
            `Language with initials ${initials} not found`,
          );
        }

        return language;
      }),
    );

    return languages;
  }
}
