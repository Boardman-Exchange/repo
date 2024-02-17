import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  imports: [],
  controllers: [WalletController],
  providers: [WalletService,DbService],
})
export class WalletModule {}
