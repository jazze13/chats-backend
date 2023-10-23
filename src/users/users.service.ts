import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async getByUsername(name: string) {
        return this.userRepository.findOne({
            where: { name },
            include: { all: true },
        });
    }
}
