import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common'; // ✅ ajout Delete
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

  @Post('update-positions')
  updatePositions(@Body() body: { listId: string; cards: any[] }) {
    return this.service.updatePositions(body.listId, body.cards);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }
}
