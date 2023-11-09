import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from '../users/users.dto';
import { JwtPayload } from './types/jwt-payload';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async register(userDto: CreateUserDto) {
        const user = await this.usersService.create(userDto);

        const token = this.generateToken(user);

        return { token };
    }

    async login(userDto: LoginUserDto) {
        const user = await this.usersService.authenticate(userDto);

        const token = this.generateToken(user);

        return { token };
    }

    async validate({ username }: JwtPayload) {
        const user = await this.usersService.findByUsername(username);

        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }

        return user;
    }

    private generateToken({ username }: LoginUserDto) {
        const user: JwtPayload = { username };
        return this.jwtService.sign(user);
    }
}