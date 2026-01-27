import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from '../../schemas/card.schema';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private model: Model<Card>) {}

  create(listId: string, title: string, position: number) {
    return this.model.create({ listId, title, position });
  }

  findByList(listId: string) {
    return this.model.find({ listId }).sort({ position: 1 });
  }
}
