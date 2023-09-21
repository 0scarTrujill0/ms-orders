import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Orders extends Document {
  @Prop({ required: true })
  orderId: string;

  @Prop({ required: true })
  userName: string;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);