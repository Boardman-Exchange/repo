import { Injectable, Logger } from '@nestjs/common';
import { IWallet } from './IWallet';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class WalletService implements IWallet {
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(WalletService.name, {
      timestamp: true,
    });
  }
  logger: Logger;
  PayWithCrypto(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  DepositWithCard(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  DepositWithCrypto(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  WithdrawToBank(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  WithdrawToCrypto(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  PayWithBalance(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  PayWithCard(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  GetBalance(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateBalance(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
