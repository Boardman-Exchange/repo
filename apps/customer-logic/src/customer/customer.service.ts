import { Injectable, Logger } from '@nestjs/common';
import { ICustomer } from './ICustomer';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class CustomerService implements ICustomer {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(CustomerService.name, {
      timestamp: true,
    });
  }
  CreateCustomer(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindById(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBydisplayName(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserHandle(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserContactsId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserInventoryId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBysquareId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserBookmarkId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByUserId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByAcceptedOfferId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByCounterOfferId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByUserWalletId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByUserCartId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBypickupId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByreferralId(data: Map<string, any>): Promise<BMResponse> {
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
  FindByUsersquareModId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByfirst_name(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBylast_name(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByemail(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBypassword(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByprofile(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByuserProfileId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBycontactItemId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindByrole(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  FindBylocation(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdatedisplayName(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateuserHandleId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateAcceptedOfferId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateCounterOfferId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateUserCartId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateuserAboutId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdatepickupId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdatereferralId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdateUsersquareModId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Updatefirst_name(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Updatelast_name(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Updateemail(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Updatepassword(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  UpdatecontactItemId(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Updaterole(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  Updatelocation(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
