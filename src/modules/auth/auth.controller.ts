import { Body, Controller, Get, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../users/users.dto';
import { UsersService } from '../users/users.service';
import { Request } from 'src/types/types';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) {}

    @UsePipes(new ValidationPipe())
    @Public()
    @Post('signup')
    async signup(@Body() userDto: CreateUserDto) {
        return await this.authService.register(userDto);
    }

    @UsePipes(new ValidationPipe())
    @Public()
    @Post('login')
    async login(@Body() userDto: LoginUserDto) {
        return await this.authService.login(userDto);
    }

    @Get('profile')
    async getProfile(@Req() request: Request) {
        return await this.usersService.findById(request.user.id);
    }
}
