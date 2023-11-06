import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Message } from '../messages/messages.schema';
import { User } from '../users/users.schema';

export type ChatDocument = HydratedDocument<Chat>;

@Schema({ timestamps: true })
export class Chat {
    @Prop({
        required: true,
    })
    name: string;

    @Prop()
    description: string;

    @Prop({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Message',
            },
        ],
    })
    messages: Message[];

    @Prop({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    })
    participants: User[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
