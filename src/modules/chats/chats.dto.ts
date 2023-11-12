import { IsNotEmpty } from 'class-validator';
import { UserDto } from '../users/users.dto';
import { MessageDto } from '../messages/messages.dto';

export class ChatDto {
    name: string;

    description?: string;

    participants: UserDto[];

    lastMessage: MessageDto;
}

export class CreateChatDto {
    @IsNotEmpty()
    name: string;

    description?: string;

    @IsNotEmpty()
    participantsIds: string[];
}
