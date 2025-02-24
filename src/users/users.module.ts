import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Add this
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Export if used in other modules (e.g., AuthModule)
})
export class UsersModule {}