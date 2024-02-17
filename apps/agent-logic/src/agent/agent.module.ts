import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [AgentController],
  providers: [AgentService, DbService],
})
export class AgentModule {}
