import { Module } from '@nestjs/common';
import { AgentModule } from './agent/agent.module';
import { QueueModule } from './queue/queue.module';
import { OrderModule } from './order/order.module';
import { WalletModule } from './wallet/wallet.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:['.env','apps/agent-logic/.env']
  }),AgentModule, QueueModule, OrderModule, WalletModule],
  controllers: [],
  providers: [],
})
export class AgentLogicModule {}
