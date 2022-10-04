export class CreateCourseModuleDto {
  name: string;
  number: number;
}

export class CreateCourseDto {
  name: string;
  description: string;
  price: number;
  languagesIds: number[];
  modules: CreateCourseModuleDto[];
}
