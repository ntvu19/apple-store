import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';

@Schema({ _id: false })
export class ProductCart extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Product.name })
  productId: Product;

  @Prop()
  quantity: number;
}
export const ProductCartSchema = SchemaFactory.createForClass(ProductCart);
