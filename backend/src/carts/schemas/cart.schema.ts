import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { ProductCartInterface } from '../interfaces/productCart.interface';
import { ProductCartSchema } from './productCart.schema';

@Schema()
export class Cart extends Document {
  @Prop()
  status: STATUS;

  @Prop({ type: [ProductCartSchema] })
  products: ProductCartInterface[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}

export enum STATUS {
  A = 'State A',
  B = 'State B',
}
export const CartSchema = SchemaFactory.createForClass(Cart);
