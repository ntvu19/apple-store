import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  phone: string;

  @Prop({ type: [String] })
  address: string[];

  @Prop({
    required: true,
    enum: ['MODERATE', 'ADMIN', 'USER'],
    default: 'USER',
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
