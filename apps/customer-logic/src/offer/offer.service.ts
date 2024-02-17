import { Injectable, Logger } from '@nestjs/common';
import { IOffer } from './IOffer.interface';
import BMResponse from '@app/boardman-commons/IResponse';

@Injectable()
export class OfferService implements IOffer {
  logger: Logger;
  /**
   *
   */
  constructor() {
    this.logger = new Logger(OfferService.name, {
      timestamp: true,
    });
  }
  CreateOffer(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByWindow(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByTitle(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserProfileId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserGameId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByUserGameSwapId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByBookmarkableId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByStatus(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBycreatedAt(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByupdatedAt(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateWindow(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateTitle(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateuserProfileId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateuserGameId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateUserGameSwapId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateBookmarkableId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateStatus(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
