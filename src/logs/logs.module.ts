import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsService } from './logs.service';
import { Log } from './log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log])],
  providers: [LogsService],
  exports: [LogsService],
})
export class LogsModule {}