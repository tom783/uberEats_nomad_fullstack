import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

// @InputType()
// export class CreateRestaurantDto {
//   @Field((returns) => String)
//   @IsString()
//   @Length(5, 10)
//   name: String;

//   @Field((returns) => Boolean, { nullable: true })
//   @IsBoolean()
//   isVegan?: Boolean;

//   @Field((returns) => String)
//   @IsString()
//   address: String;

//   @Field((returns) => String)
//   @IsString()
//   @Length(5, 10)
//   ownerName: String;
// }

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}
