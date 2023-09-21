import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://admin:admin@mongo-cluster.iqwq3p4.mongodb.net/orders',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    OrdersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
