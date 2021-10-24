import { EntityRepository, Repository } from 'typeorm';
import { Language } from '../entities/language.entity';

@EntityRepository(Language)
export class LanguageRepository extends Repository<Language> {}
