import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
    constructor(private service: ListsService) {}

    @Post()
    create(@Body() body: any) {
    return this.service.create(body.boardId, body.title, body.position);
    }

    @Get(':boardId')
    findByBoard(@Param('boardId') boardId: string) {
        return this.service.findByBoard(boardId);
    }
}