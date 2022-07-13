import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/users.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({ email, password, role }: CreateAccountInput) {
    try {
      /**
       * const exists = await this.users.findOneBy({ email }); <- this code make error
       * <Error message>
       * Type 'String' is not assignable to type 'boolean | FindOperator<any> | FindOptionsWhere<String> | FindOptionsWhere<String>[] | EqualOperator<String>'.
  Type 'String' is not assignable to type 'FindOptionsWhere<String>'.
    Types of property 'toString' are incompatible.
      Type '() => string' is not assignable to type 'never'
       */
      const exists = await this.users.findOneBy({ email });

      if (exists) {
        return;
      }

      /**
       * const newAccount = this.users.create(CreateAccountInput); <- this code make error
       * <Error message>
       * No overload matches this call.
  Overload 1 of 3, '(entityLikeArray: DeepPartial<User>[]): User[]', gave the following error.
    Argument of type 'typeof CreateAccountInput' is not assignable to parameter of type 'DeepPartial<User>[]'.
      Type 'typeof CreateAccountInput' is missing the following properties from type 'DeepPartial<User>[]': pop, push, concat, join, and 28 more.
  Overload 2 of 3, '(entityLike: DeepPartial<User>): User', gave the following error.
       */
      const newAccount = this.users.create(CreateAccountInput);
      await this.users.save(newAccount);
      return true;
    } catch (e) {
      return false;
    }
  }
}
