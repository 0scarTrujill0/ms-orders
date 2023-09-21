import { Module } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './controllers/orders.controller';
import { Orders, OrdersSchema } from './models/orders.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Orders.name, schema: OrdersSchema }])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
