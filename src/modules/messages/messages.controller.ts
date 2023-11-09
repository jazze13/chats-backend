import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Get()
    async getByChatId(chatId: string) {
        try {
            return await this.messagesService.getMessagesByChatId(chatId);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
