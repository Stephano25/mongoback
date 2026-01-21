import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from '../../schemas/board.schema';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Board.name)
    private readonly model: Model<Board>,
  ) {}

  create(title: string) {
    return this.model.create({ title });
  }

  findAll() {
    return this.model.find();
  }
}
