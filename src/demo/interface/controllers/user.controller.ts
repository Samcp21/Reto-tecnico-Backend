import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { createUserDto } from 'src/demo/aplication/dto/user/create-user.dto';
import { updateUserDto } from 'src/demo/aplication/dto/user/update-user.dto';
import { UserService } from 'src/demo/aplication/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: createUserDto) {
    return this.userService.createUser(user);
  }

    @Get(':id')
    async getUser(@Param('id') id: string) {
      return this.userService.getUser(id);
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() user: updateUserDto) {
      return this.userService.updateUser(id, user);
    }
}
