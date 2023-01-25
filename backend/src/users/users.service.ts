import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { GetAllUsersDto } from './dto/get-all-users.dto';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    let keyNames = Object.keys(new GetAllUsersDto()).join(' ');
    return await this.userModel.find({}, keyNames).exec();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User | undefined> {
    await this.userModel
      .findOne({
        email: createUserDto.email,
      })
      .then((checkedUser) => {
        if (!checkedUser) {
          // CONSTANST
          const saltOrRounds = 10;
          const password = createUserDto.password;
          bcrypt.hash(password, saltOrRounds).then((hashed) => {
            createUserDto.password = hashed;
            const createdUser = new this.userModel(createUserDto);
            return createdUser.save();
          });
        }
        // If  `checkedUser` is 'null' -> User is existed!
      })
      .catch((err) => {});
    return undefined;
  }

  async findUserByEmail(email: string): Promise<User> {
    let keyNames = Object.keys(new GetAllUsersDto()).join(' ');
    return this.userModel.findOne({ email }, keyNames).exec();
  }

  async signIn(signInDto: SignInDto) {
    let userEmail = signInDto.email;
    this.userModel
      .findOne({ userEmail }, 'password')
      .exec()
      .then((user) => {
        if (user) {
          const hashed = user.password;
          bcrypt.compare(signInDto.password, hashed).then((result) => {
            // Create token and save
            // ...
            result
              ? console.log('password is valid')
              : console.log('password is invalid');
            return result;
          });
        }
      })
      .catch((err) => {});
  }
}
