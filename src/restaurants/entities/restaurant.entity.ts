import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// graphQL 자동스키마
@ObjectType()
// typeORM 자동 테이블
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((returns) => Number)
  id: number;

  @Field((returns) => String)
  @Column()
  name: String;

  @Field((returns) => Boolean)
  @Column()
  isVegan: Boolean;

  @Field((returns) => String)
  @Column()
  address: String;

  @Field((returns) => String)
  @Column()
  ownerName: String;

  @Field((returns) => String)
  @Column()
  categoryName: String;
}
