import { Language } from 'src/modules/language/entities/language.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CourseModule } from './course-module.entity';

@Entity('courses')
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'price' })
  price: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'creator_user_id' })
  creatorUser: User;

  @ManyToMany(() => Language)
  @JoinTable({
    name: 'courses_languages',
    joinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'language_id',
      referencedColumnName: 'id',
    },
  })
  languages: Language[];

  @OneToMany(() => CourseModule, (module) => module.course, {
    cascade: true,
  })
  modules: CourseModule[];

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
