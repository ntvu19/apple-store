import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);

    try {
      const createdUser = await newUser.save();
      return createdUser;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  // private users: User[] = [];
  // getAllUser(): User[] {
  //   return this.users;
  // }
  // getUserById(id: number): User {
  //   return this.users.find((user) => user.id === id);
  // }
  // deleteUserById(id: number) {
  //   this.users = this.users.filter((user: User) => user.id !== id);
  // }
  // updateNameOfUserById(id: number, name: string): User {
  //   const user = this.getUserById(id);
  //   user.name = name;
  //   return user;
  // }
}
