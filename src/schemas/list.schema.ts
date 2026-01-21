import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class List {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  boardId: string;

  @Prop({ required: true })
  position: number;
}

export const ListSchema = SchemaFactory.createForClass(List);
