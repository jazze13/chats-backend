import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @MinLength(3)
    username: string;

    @MinLength(8)
    password: string;
}

export class LoginUserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}

export class UserDto {
    username: string;

    id: string;
}