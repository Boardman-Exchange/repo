import { Injectable, Logger } from '@nestjs/common';
import { ICounteroffer } from './ICOffer';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class CounterOfferService implements ICounteroffer {
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(CounterOfferService.name, {
      timestamp: true,
    });
  }
  logger: Logger;
  CreateCounterOffer(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  AcceptCounterOffer(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  FindByGameId(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  FindByprofileId(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  FindByOfferId(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  FindBycreatedAt(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  FindByupdatedAt(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  FindByAcceptedOfferId(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  UpdateGameId(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  UpdateprofileId(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  UpdateOfferId(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
  UpdateAcceptedOfferId(data: Map<string, any>): BMResponse {
    throw new Error('Method not implemented.');
  }
}
