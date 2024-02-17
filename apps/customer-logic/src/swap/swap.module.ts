import { Module } from '@nestjs/common';
import { SwapService } from './swap.service';
import { SwapController } from './swap.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [SwapController],
  providers: [SwapService, DbService],
})
export class SwapModule {}
