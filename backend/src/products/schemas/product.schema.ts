import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SpecsInterface } from '../interfaces/specs.interface';
import { SpecsSchema } from './specs.schema';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: [SpecsSchema], default: [] })
  specs: SpecsInterface[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
