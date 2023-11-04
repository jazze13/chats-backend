import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.MODE}`,
        }),
        MongooseModule.forRoot('mongodb://localhost/chats'),
        AuthModule,
        UsersModule,
    ],
})
export class AppModule {}
