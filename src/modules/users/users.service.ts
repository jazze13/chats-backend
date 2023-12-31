import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, LoginUserDto, UserDto } from './users.dto';
import { Model } from 'mongoose';
import { User } from './users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(userDto: CreateUserDto) {
        const userFromDb = await this.userModel.findOne({ username: userDto.username }).exec();

        if (userFromDb) {
            throw new HttpException(
                'User with this username already exist',
                HttpStatus.BAD_REQUEST,
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userDto.password, salt);

        const user = new this.userModel({
            username: userDto.username,
            password: hashedPassword,
        });

        return user.save();
    }

    async authenticate({ username, password }: LoginUserDto) {
        const user = await this.userModel.findOne({ username }).exec();

        if (!user) {
            throw new HttpException("User doesn't exist", HttpStatus.BAD_REQUEST);
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return user;
    }

    async findById(id: string): Promise<UserDto> {
        const user = await this.userModel.findOne({ _id: id }).exec();

        if (!user) {
            throw new HttpException("User doesn't exist", HttpStatus.BAD_REQUEST);
        }

        return {
            id: user.id,
            username: user.username,
        };
    }
}
