import { Prop, Schema } from '@nestjs/mongoose';
import { User } from '../users/users.schema';
import mongoose from 'mongoose';
import { Chat } from '../chats/chats.schema';

@Schema({ timestamps: true })
export class Message {
    @Prop({
        required: true,
    })
    author: User;

    @Prop({
        required: true,
    })
    body: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
    })
    chat: Chat;
}
