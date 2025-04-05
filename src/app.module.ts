import { Module } from '@nestjs/common';
import { DemoModule } from './demo/demo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017'), DemoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
