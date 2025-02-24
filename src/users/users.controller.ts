import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard) // Protect routes with JWT
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(+id);
  }

  @Post()
  create(@Body() body: { username: string; password: string }) {
    return this.usersService.create(body.username, body.password);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: { username?: string; password?: string },
  ) {
    return this.usersService.update(+id, body.username ?? '', body.password ?? '');
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}