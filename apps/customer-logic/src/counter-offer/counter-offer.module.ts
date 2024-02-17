import { Module } from '@nestjs/common';
import { CounterOfferService } from './counter-offer.service';
import { CounterOfferController } from './counter-offer.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [CounterOfferController],
  providers: [CounterOfferService, DbService],
})
export class CounterOfferModule {}
