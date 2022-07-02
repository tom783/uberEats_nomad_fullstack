import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: String): Restaurant[] {
    console.log(veganOnly);
    return [];
  }
  // @Resolver()
  // @Query(() => Restaurant)
  // myRestaurant(): String {
  //   return 'name';
  // }

  // @Mutation(() => Boolean)
  // creatRestaurant(
  //   @Args('creatRestaurantInput') creatRestaurantInput: CreateRestaurantDto,
  // ): Boolean {
  //   console.log('creatRestaurantInput', creatRestaurantInput);
  //   return true;
  // }

  // ㄴ> 요청
  // mutation {
  //   creatRestaurant(createRestaurantInput: {name:"pizzaHut", address:"adf", ownerName:"tommy", isVegan:false})
  // }

  @Mutation(() => Boolean)
  creatRestaurant(@Args() creatRestaurantInput: CreateRestaurantDto): Boolean {
    console.log('creatRestaurantInput', creatRestaurantInput);
    return true;
  }
}
// ㄴ> 요청
// mutation {
//   creatRestaurant(name:"pizzaHut", address:"adf", ownerName:"tommy", isVegan:false)
// }
