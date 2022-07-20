import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      //@ts-ignore
      const exists = await this.users.findOne({ where: { email } });

      if (exists) {
        return {
          ok: false,
          error: 'There is a user with that email already',
        };
      }
      const newAccount = this.users.create({ email, password, role });
      await this.users.save(newAccount);
      return { ok: true };
    } catch (e) {
      return {
        ok: false,
        error: "Couldn't create account",
      };
    }
  }
}
