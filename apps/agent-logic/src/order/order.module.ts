import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, DbService],
})
export class OrderModule {}
