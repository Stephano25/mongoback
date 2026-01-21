import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Card {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  listId: string;

  @Prop({ required: true })
  position: number;
}

export const CardSchema = SchemaFactory.createForClass(Card);
