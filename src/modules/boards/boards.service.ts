import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from '../../schemas/board.schema';

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board.name) private model: Model<Board>) {}

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  create(title: string) {
    return this.model.create({ title });
  }

  update(id: string, title: string) {
    return this.model.findByIdAndUpdate(id, { title }, { new: true });
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
