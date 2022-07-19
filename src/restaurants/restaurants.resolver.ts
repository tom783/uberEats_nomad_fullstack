import { Res, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsService } from './restaurants.service';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  constructor(private restaurantsService: RestaurantsService) {}
  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantsService.getAllRestaurants();
  }

  @Mutation((returns) => Restaurant)
  createRestaurant(
    // @Args('name') name: String,
    // @Args('isVegan') isVegan: Boolean,
    // @Args('address') address: String,
    // @Args('ownerName') ownerName: String,
    // @Args('categoryName') categoryName: String,
    @Args('input') createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantsService.createRestaurants(createRestaurantDto);
  }

  @Mutation((returns) => Boolean)
  updateRestaurant(
    @Args('id') id: number,
    @Args('input') data: UpdateRestaurantDto,
  ) {
    return this.restaurantsService.updateRestaurants(id, data);
  }
}
