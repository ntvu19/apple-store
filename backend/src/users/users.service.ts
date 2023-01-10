import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUser(): User[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto): User {
    const user: User = {
      id: createUserDto.id,
      email: createUserDto.email,
      password: createUserDto.password,
      name: createUserDto.name,
      age: createUserDto.age,
    };

    this.users.push(user);
    return user;
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  deleteUserById(id: number) {
    this.users = this.users.filter((user: User) => user.id !== id);
  }

  updateNameOfUserById(id: number, name: string): User {
    const user = this.getUserById(id);
    user.name = name;
    return user;
  }
}
