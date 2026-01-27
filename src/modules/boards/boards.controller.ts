import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
