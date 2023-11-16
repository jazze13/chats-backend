import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat } from './chats.schema';
import { Model } from 'mongoose';
import { CreateChatDto } from './chats.dto';
import { UserDocument } from '../users/users.schema';

@Injectable()
export class ChatsService {
    constructor(@InjectModel(Chat.name) private chatsModel: Model<Chat>) {}

    async filterByUserId(user: UserDocument) {
        try {
            return await this.chatsModel.find({participants: user.id}).exec();
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async create(chatDto: CreateChatDto) {
        const chat = new this.chatsModel({
            name: chatDto.name,
            description: chatDto.description,
            participants: chatDto.participantsIds,
        });

        return chat.save();
    }
}
