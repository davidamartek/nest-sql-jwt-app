import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    findByUsername(username: string): Promise<User>;
    create(username: string, password: string): Promise<User>;
    update(id: number, username: string, password: string): Promise<User>;
    delete(id: number): Promise<void>;
}
