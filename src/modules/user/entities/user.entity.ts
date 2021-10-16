import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserGroup } from './user-group.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email' })
  email: string;

  @Exclude()
  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'date_of_birth' })
  dateOfBirth: Date;

  @OneToOne(() => UserGroup, { eager: true })
  @JoinColumn({ name: 'user_group_id' })
  group: UserGroup;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
