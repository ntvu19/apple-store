import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { ProductOrderInterface } from '../interfaces/products.interface';
import { ProductOrderSchema } from './productOrder.schema';

@Schema()
export class Order extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ type: [ProductOrderSchema] })
  products: [ProductOrderInterface];

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  shipping: ShippingEnum;

  @Prop({ require: true })
  payment: PaymentEnum;
}

export enum ShippingEnum {
  ShipA = 'Ship A',
  ShipB = 'Ship B',
}

export enum PaymentEnum {
  A = 'COD',
  B = 'ATM/VISA',
  C = 'Momo',
}

export const OrderSchema = SchemaFactory.createForClass(Order);
