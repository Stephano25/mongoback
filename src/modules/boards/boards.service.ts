import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from '../../schemas/board.schema'; // ✅ chemin corrigé

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board.name) private model: Model<Board>) {}

  async findAll(): Promise<Board[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<Board | null> { // ✅ type corrigé
    return this.model.findById(id).exec();
  }

  async create(title: string): Promise<Board> {
    const board = new this.model({ title });
    return board.save();
  }

  async update(id: string, title: string): Promise<Board | null> { // ✅ type corrigé
    return this.model.findByIdAndUpdate(id, { title }, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
