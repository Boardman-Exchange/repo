import { Injectable, Logger } from '@nestjs/common';
import { IAWallet } from './IAWallet';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class WalletService implements IAWallet {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(WalletService.name, {
      timestamp: true,
    });
  }
  CreateWallet(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  WithdrawToBank(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  WithdrawToCrypto(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  GetBalance(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  UpdateBalance(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
}
