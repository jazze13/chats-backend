import { Request as ExpressRequest } from 'express';
import { UserDocument } from '../modules/users/users.schema';

export interface Request extends ExpressRequest {
    user: UserDocument;
}
