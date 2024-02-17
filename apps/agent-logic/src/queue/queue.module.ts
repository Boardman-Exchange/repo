import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [QueueController],
  providers: [QueueService, DbService],
})
export class QueueModule {}
