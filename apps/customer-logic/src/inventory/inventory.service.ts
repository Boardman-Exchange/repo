import { Injectable, Logger } from '@nestjs/common';
import { IInventory } from './IInventory';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class InventoryService implements IInventory {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger(InventoryService.name, {
      timestamp: true,
    });
  }
  Getgames(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  GetUserProfile(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<string, any>): BMResponse {
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
  AddGame(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  RemoveGame(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  AddProfile(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  RemoveProfile(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
