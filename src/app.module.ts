import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';

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
        ChatsModule,
        MessagesModule,
    ],
})
export class AppModule {}
