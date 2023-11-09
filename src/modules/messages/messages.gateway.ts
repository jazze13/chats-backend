import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { MessageDto } from './messages.dto';
import { MessagesService } from './messages.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class MessagesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(private readonly messagesService: MessagesService) {}

    @WebSocketServer() server: Server;

    @SubscribeMessage('sendMessage')
    async sendMessage(@MessageBody() messageDto: MessageDto) {
        // TODO получения отправителя из токена
        const message = await this.messagesService.createMessage(messageDto);

        this.server.emit('receiveMessage', message);
    }

    afterInit(server: Server) {
        console.log('initialized');
    }

    handleConnection(client: Socket) {
        console.log('connected', client.id);
    }

    handleDisconnect(client: Socket) {
        console.log('disconnected', client.id);
    }
}
