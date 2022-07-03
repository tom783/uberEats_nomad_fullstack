import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field((returns) => String)
  name: String;

  @Field((returns) => Boolean)
  isVegan: Boolean;
}
