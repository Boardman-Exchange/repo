import { Module } from '@nestjs/common';
import { SquareService } from './square.service';
import { SquareController } from './square.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [SquareController],
  providers: [SquareService, DbService],
})
export class SquareModule {}
