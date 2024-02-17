import { Injectable, Logger } from '@nestjs/common';
import { DbService } from '@app/boardman-commons/db/db.service';
import { IContacts } from './IContacts';
import BMResponse from '@app/boardman-commons/IResponse';

@Injectable()
export class ContactService implements IContacts {
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(ContactService.name, {
      timestamp: true,
    });
  }
  logger: Logger;
  Getcontacts(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Addcontact(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Removecontact(data: Map<string, any>): BMResponse {
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
  FindBycreatedAt(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByupdatedAt(data: Map<string, any>): BMResponse {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
