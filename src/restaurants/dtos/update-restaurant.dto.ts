import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

// @InputType()
// export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {}

// PartialType 기능은 모든 스키마들을 optional하게 변경
// https://docs.nestjs.com/openapi/mapped-types#partial
@InputType()
class UpdateRestaurantInputType extends PartialType(CreateRestaurantDto) {}

@ArgsType()
export class UpdateRestaurantDto {
  @Field((returns) => Number)
  id: number;

  @Field((returns) => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
