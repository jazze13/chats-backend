import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    UseGuards,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './chats.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Request } from '../../types/types';

@Controller('chats')
export class ChatsController {
    constructor(private readonly chatsService: ChatsService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getUserChats(@Req() request: Request) {
        return await this.chatsService.getAllByUserId(request.user);
    }

    @UsePipes(new ValidationPipe())
    @Post('create')
    async createChat(@Body() chatDto: CreateChatDto) {
        return await this.chatsService.create(chatDto);
    }
}
