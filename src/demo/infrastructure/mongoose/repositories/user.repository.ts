import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/demo/domain/entities/user.entity';
import { UserRepository } from 'src/demo/domain/repositories/user.repository';

export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async getUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async updateUser(id: string, user: User): Promise<User> {
    const updateUser = await this.userModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();
    if (!updateUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return updateUser;
  }
}
