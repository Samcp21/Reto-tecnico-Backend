import { Injectable } from '@nestjs/common';
import { UserRepositoryImpl } from 'src/demo/infrastructure/mongoose/repositories/user.repository';
import { User } from 'src/demo/domain/entities/user.entity';

@Injectable()
export class UserUseCase {
  constructor(private readonly userRepository: UserRepositoryImpl) {}
  async createUser(user: User): Promise<User> {
    return await this.userRepository.create(user);
  }

  async getUser(id: string) {
    return await this.userRepository.getUser(id);
  }

  async updateUser(id: string, user: User): Promise<User> {
    return await this.userRepository.updateUser(id, user);
  }
}
