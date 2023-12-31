import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
    return this.userService.create(body.email, body.password);
  }
}
