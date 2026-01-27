import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common'; // ✅ ajout Delete
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(private service: ListsService) {}

  @Post()
  create(@Body() body: { boardId: string; title: string; position: number }) {
    return this.service.create(body.boardId, body.title, body.position);
  }

  @Get(':boardId')
  findByBoard(@Param('boardId') boardId: string) {
    return this.service.findByBoard(boardId);
  }

  @Post('update-positions')
  updatePositions(@Body() body: { boardId: string; lists: any[] }) {
    return this.service.updatePositions(body.boardId, body.lists);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }
}
