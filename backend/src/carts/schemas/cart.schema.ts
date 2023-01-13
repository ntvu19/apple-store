import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { ProductCartInterface } from '../interfaces/productCart.interface';
import { ProductCartSchema } from './productCart.schema';

@Schema()
export class Cart extends Document {
  @Prop({ enum: ['State A', 'State B'] })
  status: string;

  @Prop({ type: [ProductCartSchema] })
  products: ProductCartInterface[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: User;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
