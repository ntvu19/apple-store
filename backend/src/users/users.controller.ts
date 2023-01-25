import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('sign-in') // Sign in
  signIn(@Body() signInDto: SignInDto): any {
    return this.usersService.signIn(signInDto);
  }

  @Get(':email')
  findUserByEmail(@Param('email') email: string): Promise<User> {
    return this.usersService.findUserByEmail(email);
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Post() // Sign up
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
