import { createUserDto } from 'src/demo/aplication/dto/user/create-user.dto';
import { User } from '../entities/user.entity';

export interface UserRepository {
  create(createUserDto: createUserDto): Promise<User>;
  getUser(id: string): Promise<User>;
  updateUser(id: string, user: User): Promise<User>;
}
