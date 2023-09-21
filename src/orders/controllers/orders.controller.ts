import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { Orders } from '../models/orders.model';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() order: Orders): Promise<Orders> {
    return this.ordersService.create(order);
  }

  @Get()
  async findAll(): Promise<Orders[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Orders | null> {
    return this.ordersService.findById(id);
  }
}