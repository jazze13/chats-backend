import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../users/users.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @Post('signup')
    async signup(@Body() userDto: CreateUserDto) {
        return await this.authService.register(userDto);
    }

    @UsePipes(new ValidationPipe())
    @Post('login')
    async login(@Body() userDto: LoginUserDto) {
        return await this.authService.login(userDto);
    }
}
