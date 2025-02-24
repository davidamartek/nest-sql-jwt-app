import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LogsService } from '../logs/logs.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private logsService;
    constructor(usersService: UsersService, jwtService: JwtService, logsService: LogsService);
    validateUser(username: string, password: string): Promise<any>;
    login(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
