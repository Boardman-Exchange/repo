import { Controller, Logger } from '@nestjs/common';
import * as centrifugo from 'centrifuge';
import ICommons from '../ICommons';

@Controller('notifications')
export class NotificationsController
  extends centrifugo.Centrifuge
  implements ICommons
{
  /**
   *
   */
  logger: Logger;
  constructor() {
    super('ws://localhost:3009/connection/websocket', {
      debug: true,
    });
    this.logger = new Logger(NotificationsController.name);
    try {
      this.connect();
    } catch (error) {
      this.logger.error(error);
    }
  }
}
