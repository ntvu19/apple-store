import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';

@Schema({ _id: false })
export class ProductCart extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  productId: Product;

  @Prop()
  quantity: number;
}
export const ProductCartSchema = SchemaFactory.createForClass(ProductCart);
