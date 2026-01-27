import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Board {
  @Prop()
  title: string;

  @Prop({ type: [Types.ObjectId], ref: 'User' })
  members: Types.ObjectId[];
}

export const BoardSchema = SchemaFactory.createForClass(Board);
