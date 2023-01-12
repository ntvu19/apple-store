import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class Specification extends Document {
  @Prop()
  key: string;

  @Prop()
  value: string;

  @Prop()
  unit: string;
}

export const SpecsSchema = SchemaFactory.createForClass(Specification);
