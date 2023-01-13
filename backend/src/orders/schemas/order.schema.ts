import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { ProductOrderInterface } from '../interfaces/products.interface';
import { ProductOrderSchema } from './productOrder.schema';

@Schema()
export class Order extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: User;

  @Prop({ type: [ProductOrderSchema] })
  products: [ProductOrderInterface];

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true, enum: ['Ship A', 'Ship B'] })
  shipping: string;

  @Prop({ require: true, enum: ['COD', 'ATM/VISA', 'Momo'] })
  payment: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
