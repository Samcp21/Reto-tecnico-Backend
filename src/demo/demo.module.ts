import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './infrastructure/mongoose/schema/user.schema';
import { UserController } from './interface/controllers/user.controller';
import { UserRepositoryImpl } from './infrastructure/mongoose/repositories/user.repository';
import { UserService } from './aplication/services/user.service';
import { UserUseCase } from './aplication/use-cases/userUseCase';
import { RewardSchema } from './infrastructure/mongoose/schema/reward.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema },{name:'Reward',schema:RewardSchema}])],
  controllers: [UserController],
  providers: [UserService, UserRepositoryImpl, UserUseCase],
})
export class DemoModule {}
