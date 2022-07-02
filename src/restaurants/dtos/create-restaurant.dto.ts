import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

// @InputType()
// export class CreateRestaurantDto {
//   @Field(() => String)
//   name: string;

//   @Field(() => Boolean, { nullable: true })
//   isVegan?: Boolean;

//   @Field(() => String)
//   address: String;

//   @Field(() => String)
//   ownerName: String;
// }

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  isVegan?: Boolean;

  @Field(() => String)
  @IsString()
  address: String;

  @Field(() => String)
  @IsString()
  @Length(5, 10)
  ownerName: String;
}
