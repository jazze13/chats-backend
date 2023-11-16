import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/:id')
    async getUser(@Param() params: { id: string }) {
        return await this.usersService.findById(params.id);
    }
}
