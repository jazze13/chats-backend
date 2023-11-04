import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as process from 'process';
import { JwtPayload } from './types/jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: JwtPayload) {
        const user = this.authService.validate(payload);

        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }

        return user;
    }
}
