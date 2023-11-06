import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MessageDto } from './messages.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './messages.schema';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

    async createMessage(messageDto: MessageDto) {
        const message = new this.messageModel(messageDto);

        return message.save();
    }

    async getMessagesByChatId(chatId: string) {
        try {
            return await this.messageModel.find({ chat: chatId }).exec();
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
