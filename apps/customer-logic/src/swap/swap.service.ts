import { Injectable, Logger } from '@nestjs/common';
import { ISwap } from './ISwap';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class SwapService implements ISwap {
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(SwapService.name);
  }
  logger: Logger;
  CreateSwap(data: Map<string, any>) {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  GetUserDispute(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  GetOrder(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserProfileId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserOfferId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBygameSwapThreadId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByLocation(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBycreatedAt(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByupdatedAt(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateuserProfileId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateuserOfferId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdategameSwapThreadId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
