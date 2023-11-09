import { forwardRef, Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { UsersModule } from '../users/users.module';
import { MessagesModule } from '../messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './chats.schema';

@Module({
    providers: [ChatsService],
    controllers: [ChatsController],
    imports: [
        forwardRef(() => UsersModule),
        MessagesModule,
        MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
    ],
})
export class ChatsModule {}
