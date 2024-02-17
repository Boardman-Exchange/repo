import { Module } from '@nestjs/common';
import { LogisticsService } from './logistics.service';

@Module({
  providers: [LogisticsService]
})
export class LogisticsModule {}
