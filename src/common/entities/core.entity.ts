import { Field } from '@nestjs/graphql';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  // special columns
  @CreateDateColumn()
  @Field((type) => Date)
  createAt: Date;

  // special columns
  @UpdateDateColumn()
  @Field((type) => Date)
  updateAt: Date;
}
