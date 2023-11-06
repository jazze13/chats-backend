import { IsNotEmpty } from 'class-validator';

export class MessageDto {
    authorId: string;

    chatId: string;

    body: string;
}

export class CreateMessageDto {
    @IsNotEmpty()
    chatId: string;

    @IsNotEmpty()
    body: string;
}
