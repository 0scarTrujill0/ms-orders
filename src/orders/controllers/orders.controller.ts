import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { Orders } from '../models/orders.model';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @EventPattern({ cmd: 'orders' })
  async handleMessage(message: any): Promise<void> {
    console.log(`Mensaje recibido de RabbitMQ: ${JSON.stringify(message)}`);
  }

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
