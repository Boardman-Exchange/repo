import { Module } from '@nestjs/common';
import { PickupService } from './pickup.service';
import { PickupController } from './pickup.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [PickupController],
  providers: [PickupService, DbService],
})
export class PickupModule {}
