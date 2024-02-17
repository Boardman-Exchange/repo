import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [SaleController],
  providers: [SaleService, DbService],
})
export class SaleModule {}
