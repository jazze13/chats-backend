import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop({
        required: true,
        unique: true,
    })
    username: string;

    @Prop()
    email: string;

    @Prop({
        required: true,
    })
    password: string;

    @Prop({
        default: true,
    })
    isActive: boolean;

    @Prop({
        default: false,
    })
    isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
