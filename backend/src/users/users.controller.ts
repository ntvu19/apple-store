import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUser(): User[] {
    return this.usersService.getAllUser();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/:id')
  getUserById(@Param('id') id: number) {
    const userById = this.usersService.getUserById(id);
    return userById == undefined ? { error: 'User not found.' } : userById;
  }

  @Delete('/:id')
  deleteUserById(@Param('id') id: number) {
    this.usersService.deleteUserById(id);
  }

  @Patch('/:id') // @Body: name: string
  updateNameOfUserById(
    @Param('id') id: number,
    @Body('name') name: string,
  ): User {
    return this.usersService.updateNameOfUserById(id, name);
  }
}
