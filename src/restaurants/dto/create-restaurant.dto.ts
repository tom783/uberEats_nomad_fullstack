import {
  ArgsType,
  Field,
  InputType,
  OmitType,
  PickType,
} from '@nestjs/graphql';
import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

// @ArgsType()
// export class CreateRestaurantDto {
//   @IsString()
//   @Field((type) => String)
//   name: String;

//   @IsBoolean()
//   @Field((type) => Boolean)
//   isVegan: Boolean;

//   @IsString()
//   @Field((type) => String)
//   address: String;

//   @MinLength(5)
//   @MaxLength(10)
//   @IsString()
//   @Field((type) => String)
//   ownerName: String;

//   @IsString()
//   @Field((type) => String)
//   categoryName: String;
// }

@InputType()
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  // 혹은 Input Type으로 변경을 원한다면 아래 혹은 MapperType에 넣은 타입클래스에 @InputType({isAbstract: true})
  // InputType,
) {}
