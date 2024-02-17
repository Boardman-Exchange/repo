import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';

@Module({
  providers: [],
  controllers: [NotificationsController],
})
export class NotificationsModule {}
