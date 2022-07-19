import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  async getAllRestaurants(): Promise<Restaurant[]> {
    return await this.restaurantRepository.find();
  }

  async createRestaurants(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    try {
      const restaurant = this.restaurantRepository.create({
        ...createRestaurantDto,
      });
      await this.restaurantRepository.save(restaurant);
      return restaurant;
    } catch (e) {
      console.log('error', e);
      throw new NotFoundException('error');
    }
  }

  async updateRestaurants(
    id: number,
    data: UpdateRestaurantDto,
  ): Promise<Boolean> {
    try {
      //   const restaurant = await this.restaurantRepository.findOne({
      //     //@ts-ignore
      //     where: { id },
      //   });
      //   const newRestaurant = this.restaurantRepository.create({
      //     id: restaurant.id,
      //     ...data,
      //   });
      //   await this.restaurantRepository.save(newRestaurant);
      //   return newRestaurant;
      await this.restaurantRepository.update(id, { ...data });
      return true;
    } catch (e) {
      console.log('error', e);
      throw new NotFoundException('error');
    }
  }
}
