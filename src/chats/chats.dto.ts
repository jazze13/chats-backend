import { IsNotEmpty } from 'class-validator';
import { Message } from '../messages/messages.schema';
import { User } from '../users/users.schema';

export class ChatsDto {
    name: string;

    description?: string;

    participants: User[];

    messages: Message[];
}

export class CreateChatDto {
    @IsNotEmpty()
    name: string;

    description?: string;

    @IsNotEmpty()
    participantsIds: string[];
}
