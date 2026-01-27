import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private service: CardsService) {}

  @Post()
  create(@Body() body: { listId: string; title: string; position: number }) {
    return this.service.create(body.listId, body.title, body.position);
  }

  @Get(':listId')
  findByList(@Param('listId') listId: string) {
    return this.service.findByList(listId);
  }
}
