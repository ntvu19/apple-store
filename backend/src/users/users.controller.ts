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

  // @Get()
  // getAllUser(): User[] {
  //   return this.usersService.getAllUser();
  // }

  // @Get('/:id')
  // getUserById(@Param('id') id: number) {
  //   const userById = this.usersService.getUserById(id);
  //   return userById == undefined ? { error: 'User not found.' } : userById;
  // }

  // @Delete('/:id')
  // deleteUserById(@Param('id') id: number) {
  //   this.usersService.deleteUserById(id);
  // }

  // @Patch('/:id') // @Body: name: string
  // updateNameOfUserById(
  //   @Param('id') id: number,
  //   @Body('name') name: string,
  // ): User {
  //   return this.usersService.updateNameOfUserById(id, name);
  // }
}
