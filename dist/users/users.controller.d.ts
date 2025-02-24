import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./user.entity").User[]>;
    findOne(id: string): Promise<import("./user.entity").User>;
    create(body: {
        username: string;
        password: string;
    }): Promise<import("./user.entity").User>;
    update(id: string, body: {
        username?: string;
        password?: string;
    }): Promise<import("./user.entity").User>;
    delete(id: string): Promise<void>;
}
