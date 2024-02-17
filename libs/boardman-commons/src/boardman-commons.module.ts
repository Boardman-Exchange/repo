import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { PaymentModule } from './payment/payment.module';
import { LogisticsModule } from './logistics/logistics.module';
import { NotificationsModule } from './notifications/notifications.module';
import { MailModule } from './mail/mail.module';
import { QrModule } from './qr/qr.module';
import { LocationModule } from './location/location.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RecommendationModule } from './recommendation/recommendation.module';
import { CronJobsModule } from './cron-jobs/cron-jobs.module';

@Module({
  providers: [],
  exports: [],
  imports: [
    DbModule,
    PaymentModule,
    LogisticsModule,
    NotificationsModule,
    MailModule,
    QrModule,
    LocationModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RecommendationModule,
    CronJobsModule,
  ],
})
export class BoardmanCommonsModule {}
