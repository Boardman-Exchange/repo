import { Injectable, Logger } from '@nestjs/common';
import ICommons from '../ICommons';
import * as qr from 'qr-code-styling';
@Injectable()
export class QrCodeService extends qr.default implements ICommons {
  logger: Logger;
  /**
   *
   */
  constructor() {
    super();
    this.logger = new Logger(QrCodeService.name);
  }
}
