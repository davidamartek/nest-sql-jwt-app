import { Repository } from 'typeorm';
import { Log } from './log.entity';
export declare class LogsService {
    private logsRepository;
    constructor(logsRepository: Repository<Log>);
    createLog(username: string, action: string): Promise<Log>;
}
