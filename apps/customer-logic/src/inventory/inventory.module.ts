import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService, DbService],
})
export class InventoryModule {}
