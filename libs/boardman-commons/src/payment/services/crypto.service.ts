import ICommons from '@app/boardman-commons/ICommons';
import { Injectable, Logger } from '@nestjs/common';
import * as Fluidcoins from '@fluidcoins/sdk';

@Injectable()
export class CryptoService extends Fluidcoins.default implements ICommons {
  /**
   *
   */
  logger: Logger;
  constructor() {
    super(process.env.FLUIDCOINS_KEY);
    this.logger = new Logger(CryptoService.name);
  }
}
