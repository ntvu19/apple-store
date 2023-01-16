import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';
import { Category } from 'src/categories/schemas/category.schema';
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

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Category.name })
  categoryId: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
