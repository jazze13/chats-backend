import { Request as ExpressRequest } from 'express';
import { User } from '../modules/users/users.schema';

export interface Request extends ExpressRequest {
    user: User;
}
