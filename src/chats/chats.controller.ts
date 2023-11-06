import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './chats.dto';

@Controller('chats')
export class ChatsController {
    constructor(private readonly chatsService: ChatsService) {}

    @UsePipes(new ValidationPipe())
    @Post('create')
    async createChat(@Body() chatDto: CreateChatDto) {
        return await this.chatsService.create(chatDto);
    }
}
