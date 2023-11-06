import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../users/users.schema';
import mongoose, { HydratedDocument } from 'mongoose';
import { Chat } from '../chats/chats.schema';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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

export const MessageSchema = SchemaFactory.createForClass(Message);
