import { Injectable, Logger } from '@nestjs/common';
import { DbService } from '@app/boardman-commons/db/db.service';
import { IBookmark } from './IBookmark';
import BMResponse from '@app/boardman-commons/IResponse';

@Injectable()
export class BookmarkService implements IBookmark {
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(BookmarkService.name, {
      timestamp: true,
    });
  }
  logger: Logger;
  FindByUserProfileId(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Removeitem(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Getitems(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Additem(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindById(data: Map<string, any>): BMResponse {
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
}
