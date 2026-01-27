import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List } from '../../schemas/list.schema';

@Injectable()
export class ListsService {
  constructor(@InjectModel(List.name) private model: Model<List>) {}

  create(boardId: string, title: string, position: number) {
    return this.model.create({ boardId, title, position });
  }

  findByBoard(boardId: string) {
    return this.model.find({ boardId }).sort({ position: 1 });
  }
}
