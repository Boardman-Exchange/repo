import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [GameController],
  providers: [GameService,DbService]
})
export class GameModule {}
