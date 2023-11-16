import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatsModule } from './modules/chats/chats.module';
import { MessagesModule } from './modules/messages/messages.module';
import { JwtAuthGuard } from './modules/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
    controllers: [],
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.MODE}`,
        }),
        MongooseModule.forRoot('mongodb://localhost/chats'),
        AuthModule,
        UsersModule,
        ChatsModule,
        MessagesModule,
    ],
})
export class AppModule {}
