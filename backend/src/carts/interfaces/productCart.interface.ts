import { ObjectId } from 'mongoose';

export interface ProductCartInterface {
  _id: ObjectId;
  quantity: number;
}
