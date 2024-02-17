import { DbService } from '@app/boardman-commons/db/db.service';
import { Injectable, Logger } from '@nestjs/common';
import { IGame } from './IGame';
import BMResponse from '@app/boardman-commons/IResponse';

@Injectable()
export class GameService implements IGame {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger(GameService.name, {
      timestamp: true,
    });
  }
  CreateGame(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByTitle(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByconsoleId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBygenreId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByUserGameOfferId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByUserSaleId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserInventoryId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByCounterOfferId(data: Map<string, any>): Promise<BMResponse> {
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
  UpdateTitle(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateconsoleId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdategenreId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateUserGameOfferId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateUserSaleId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateuserInventoryId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateCounterOfferId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdatePhotoPath(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
