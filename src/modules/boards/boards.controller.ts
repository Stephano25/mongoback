import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private service: BoardsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: { title: string }) {
    return this.service.create(body.title);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { title: string }) {
    return this.service.update(id, body.title);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
