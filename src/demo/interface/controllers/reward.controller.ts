import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';


@Controller('rewards')
export class UserController {
  constructor(private readonly rewardService: RewardService) {}

  @Post()
  async createUser(@Body() user: createUserDto) {
    return this.rewardService.createUser(user);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.rewardService.getUser(id);
  }

  
}
