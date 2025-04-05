import { Injectable } from '@nestjs/common';
import { UserUseCase } from '../use-cases/userUseCase';
import { User } from 'src/demo/domain/entities/user.entity';
// import { createUserDto } from '../dto/user/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userUseCase: UserUseCase) {}

  async createUser(user: User): Promise<User> {
    return await this.userUseCase.createUser(user);
  }
  async getUser(id: string): Promise<User> {
    return await this.userUseCase.getUser(id);
  }
  async updateUser(id: string, user: User): Promise<User> {
    return await this.userUseCase.updateUser(id, user);
  }
}
