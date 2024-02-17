import { Injectable, Logger } from '@nestjs/common';
import { ISale } from './ISale';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class SaleService implements ISale {
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(SaleService.name);
  }
  logger: Logger;
  CreateSale(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  GetBookmarkable(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  GetOrder(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindById(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserCartId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserProfileId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBybuyerId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserFeedId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByGameId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBysalesChargeId(data: Map<string, any>): BMResponse {
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
  UpdateuserCartId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateuserProfileId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdatebuyerId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateuserFeedId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateGameId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdatesalesChargeId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
