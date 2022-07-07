import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
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
  @IsString()
  @Length(5, 10)
  name: String;

  @Field((returns) => Boolean)
  @Column()
  @IsBoolean()
  isVegan: Boolean;

  @Field((returns) => String)
  @Column()
  @IsString()
  address: String;

  @Field((returns) => String)
  @Column()
  @IsString()
  @Length(5, 10)
  ownerName: String;

  // Field는 graphQL
  @Field((returns) => String, { nullable: true })
  // Field는 TypeOrm
  @Column({ nullable: true })
  @IsOptional()
  categoryName?: String;
}
