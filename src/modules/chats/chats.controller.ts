import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './chats.dto';
import { Request } from '../../types/types';

@Controller('chats')
export class ChatsController {
    constructor(private readonly chatsService: ChatsService) {}

    @Get()
    async getUserChats(@Req() request: Request) {
        return await this.chatsService.getAllByUserId(request.user);
    }

    @UsePipes(new ValidationPipe())
    @Post('create')
    async createChat(@Body() chatDto: CreateChatDto) {
        return await this.chatsService.create(chatDto);
    }
}
