import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';

@Module({
  providers: [ChatsService],
  controllers: [ChatsController]
})
export class ChatsModule {}
