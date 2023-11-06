import { forwardRef, Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { MessagesController } from './messages.controller';
import { UsersModule } from '../users/users.module';
import { ChatsModule } from '../chats/chats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './messages.schema';

@Module({
    providers: [MessagesService, MessagesGateway],
    controllers: [MessagesController],
    imports: [
        UsersModule,
        forwardRef(() => ChatsModule),
        MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    ],
})
export class MessagesModule {}
