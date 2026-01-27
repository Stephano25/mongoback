import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Board } from '../../schemas/board.schema';

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board.name) private readonly model: Model<Board>) {}

  async create(title: string) {
    return this.model.create({ title });
  }

  async findAll() {
    return this.model.find();
  }

  async findById(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid board ID');
    }
    const board = await this.model.findById(id);
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    return board;
  }
}
