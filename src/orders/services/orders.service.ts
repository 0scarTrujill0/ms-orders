import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Orders } from '../models/orders.model';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Orders.name) private readonly ordersModel: Model<Orders>,
  ) {}

  async create(order: Orders): Promise<Orders> {
    const newOrder = new this.ordersModel(order);
    return newOrder.save();
  }

  async findAll(): Promise<Orders[]> {
    return this.ordersModel.find().exec();
  }

  async findById(id: string): Promise<Orders | null> {
    return this.ordersModel.findById(id).exec();
  }
}
