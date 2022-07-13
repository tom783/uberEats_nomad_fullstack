import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateAccountInput, CreateAccountOutput } from './dto/users.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver((returns) => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
  @Query((returns) => Boolean)
  hi() {
    return true;
  }

  @Mutation((returns) => CreateAccountOutput)
  createAccount(@Args('input') createAccountInput: CreateAccountInput) {}
}
