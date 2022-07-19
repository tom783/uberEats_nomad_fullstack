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
      //@ts-ignore
      const exists = await this.users.findOne({ where: { email } });

      if (exists) {
        return;
      }
      const newAccount = this.users.create({ email, password });
      await this.users.save(newAccount);
      return true;
    } catch (e) {
      return false;
    }
  }
}
