import { IsNotEmpty } from 'class-validator';
import { UserDto } from '../users/users.dto';

export class MessageDto {
    author: UserDto;

    chatId: string;

    body: string;

    createdAt: string;

    updatedAt: string;
}

export class CreateMessageDto {
    @IsNotEmpty()
    chatId: string;

    @IsNotEmpty()
    body: string;
}
