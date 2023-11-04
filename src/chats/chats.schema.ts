import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Message } from '../messages/messages.schema';
import { User } from '../users/users.schema';

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
