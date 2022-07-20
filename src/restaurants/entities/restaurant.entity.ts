import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
// graphQL 자동스키마
@ObjectType()
// typeORM 자동 테이블
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  name: string;

  @Field((type) => Boolean, {
    defaultValue: true,
  })
  @IsOptional()
  @Column({ nullable: true })
  @IsBoolean()
  isVegan: boolean;

  @Field((type) => String, { defaultValue: 'Daegu' })
  @Column({ default: 'Daegu' })
  @IsString()
  address: string;

  @Field((type) => String)
  @Column()
  @IsString()
  @Length(5, 10)
  ownerName: string;

  @Field((type) => String)
  @Column()
  @IsString()
  categoryName: string;
}
