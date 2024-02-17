import { NotificationsController } from '@app/boardman-commons/notifications/notifications.controller';
import { Module } from '@nestjs/common';
import { WalletModule } from './wallet/wallet.module';
import { GameModule } from './game/game.module';
import { SwapModule } from './swap/swap.module';
import { SaleModule } from './sale/sale.module';
import { CustomerModule } from './customer/customer.module';
import { SquareModule } from './square/square.module';
import { PickupModule } from './pickup/pickup.module';
import { OfferModule } from './offer/offer.module';
import { ContactModule } from './contact/contact.module';
import { InventoryModule } from './inventory/inventory.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { CounterOfferModule } from './counter-offer/counter-offer.module';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from '@app/boardman-commons/auth/auth.controller';
import { AuthModule } from '@app/boardman-commons/auth/auth.module';
import { AuthService } from '@app/boardman-commons/auth/services/auth.service';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: ['apps/customer-logic/.env', '.env'],
    }),
    WalletModule,
    GameModule,
    SwapModule,
    SaleModule,
    CustomerModule,
    SquareModule,
    PickupModule,
    OfferModule,
    ContactModule,
    InventoryModule,
    BookmarkModule,
    CounterOfferModule,
  ],
  controllers: [NotificationsController, AuthController],
  providers: [AuthService, DbService],
})
export class CustomerLogicModule {}
