import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly service: BoardsService) {}

  @Post()
  create(@Body('title') title: string) {
    return this.service.create(title);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }
}
