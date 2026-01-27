import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from '../../schemas/board.schema'; // ✅ import corrigé

@Controller('boards')
export class BoardsController {
  constructor(private readonly service: BoardsService) {}

  @Get()
  async findAll(): Promise<Board[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Board | null> { // ✅ type corrigé
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() body: { title: string }): Promise<Board> {
    return this.service.create(body.title);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: { title: string }): Promise<Board | null> { // ✅ type corrigé
    return this.service.update(id, body.title);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }
}
