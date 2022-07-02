import { Field, ObjectType } from '@nestjs/graphql';

// database model과 같음
@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isVegan?: Boolean;

  @Field(() => String)
  address: String;

  @Field(() => String)
  ownerName: String;
}
