import { Injectable, Logger } from '@nestjs/common';
import { ISquare } from './ISquare';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class SquareService implements ISquare {
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(SquareService.name, {
      timestamp: true,
    });
  }
  logger: Logger;
  CreateSquare(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Getmembers(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Addmembers(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Removemembers(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdatephotoPath(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateAbout(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByName(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByUsersquareModId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  GetMods(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  AddMods(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  RemoveMods(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBygameSwapThreadId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  GetThread(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  AddThread(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  RemoveThread(data: Map<string, any>): BMResponse {
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
  UpdateName(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateUsersquareModId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdategameSwapThreadId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
