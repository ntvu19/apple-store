import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  // Sign in and Sign up

  // @Patch('/:id') // @Body: name: string
  // updateNameOfUserById(
  //   @Param('id') id: number,
  //   @Body('name') name: string,
  // ): User {
  //   return this.usersService.updateNameOfUserById(id, name);
  // }
}
