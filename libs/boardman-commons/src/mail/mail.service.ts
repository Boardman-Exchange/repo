import { Injectable, Logger, Scope } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import ICommons from '../ICommons';

@Injectable()
export class MailService implements ICommons {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly mail: MailerService) {
    this.logger = new Logger(MailService.name);
  }
}
