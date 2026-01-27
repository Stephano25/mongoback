import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board, BoardDocument } from '../../schemas/board.schema';

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board.name) private boardModel: Model<BoardDocument>) {}

  async findAll(): Promise<Board[]> {
    return this.boardModel.find().exec();
  }

  async findOne(id: string): Promise<Board | null> {
    return this.boardModel.findById(id).exec();
  }

  async create(title: string): Promise<Board> {
    const board = new this.boardModel({ title });
    return board.save();
  }

  async update(id: string, title: string): Promise<Board | null> {
    return this.boardModel.findByIdAndUpdate(id, { title }, { new: true }).exec();
  }

  async delete(id: string): Promise<Board | null> {
    return this.boardModel.findByIdAndDelete(id).exec();
  }
}
