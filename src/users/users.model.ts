import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreateAttrs {
    name: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreateAttrs> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    isActive: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    isAdmin: boolean;

    // TODO roles
}
