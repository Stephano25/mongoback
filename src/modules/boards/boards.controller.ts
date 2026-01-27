import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('boards')
@UseGuards(JwtAuthGuard) // ✅ protège toutes les routes
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async getBoards() {
    return this.boardsService.findAll();
  }

  @Get(':id')
  async getBoard(@Param('id') id: string) {
    return this.boardsService.findOne(id);
  }

  @Post()
  async createBoard(@Body('title') title: string) {
    return this.boardsService.create(title);
  }

  @Put(':id')
  async updateBoard(@Param('id') id: string, @Body('title') title: string) {
    return this.boardsService.update(id, title);
  }

  @Delete(':id')
  async deleteBoard(@Param('id') id: string) {
    return this.boardsService.delete(id);
  }
}
