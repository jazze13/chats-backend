import { MinLength } from 'class-validator';

export class CreateUserDto {
    @MinLength(3)
    username: string;

    @MinLength(8)
    password: string;
}

export class LoginUserDto {
    username: string;

    password: string;
}
