import { ObjectId } from 'mongoose';

export interface ProductOrderInterface {
  _id: ObjectId;
  quantity: number;
}
