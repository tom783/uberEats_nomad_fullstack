import { Mutation } from '@nestjs/graphql';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver((returns) => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation((returns) => Boolean)
  async createRestaurant(
    @Args('input') createRestaurantDto: CreateRestaurantDto,
  ): Promise<Boolean> {
    try {
      await this.restaurantService.createRestaurant(createRestaurantDto);
      return true;
    } catch (e) {
      return false;
    }
  }
}
