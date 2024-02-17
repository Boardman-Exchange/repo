import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface ICustomer  extends ICommons{
  CreateCustomer(data: Map<string, any>): Promise<BMResponse>;
  FindById(data: Map<string, any>): Promise<BMResponse>;
  FindBydisplayName(data: Map<string, any>): Promise<BMResponse>;
  FindByuserHandle(data: Map<string, any>): Promise<BMResponse>;
  FindByuserContactsId(data: Map<string, any>): Promise<BMResponse>;
  FindByuserInventoryId(data: Map<string, any>): Promise<BMResponse>;
  FindBysquareId(data: Map<string, any>): Promise<BMResponse>;
  FindByuserBookmarkId(data: Map<string, any>): Promise<BMResponse>;
  FindByUserId(data: Map<string, any>): Promise<BMResponse>;
  FindByAcceptedOfferId(data: Map<string, any>): Promise<BMResponse>;
  FindByCounterOfferId(data: Map<string, any>): Promise<BMResponse>;
  FindByUserWalletId(data: Map<string, any>): Promise<BMResponse>;
  FindByUserCartId(data: Map<string, any>): Promise<BMResponse>;
  FindBypickupId(data: Map<string, any>): Promise<BMResponse>;
  FindByreferralId(data: Map<string, any>): Promise<BMResponse>;
  FindBycreatedAt(data: Map<string, any>): Promise<BMResponse>;
  FindByupdatedAt(data: Map<string, any>): Promise<BMResponse>;
  FindByUsersquareModId(data: Map<string, any>): Promise<BMResponse>;
  FindByfirst_name(data: Map<string, any>): Promise<BMResponse>;
  FindBylast_name(data: Map<string, any>): Promise<BMResponse>;
  FindByemail(data: Map<string, any>): Promise<BMResponse>;
  FindBypassword(data: Map<string, any>): Promise<BMResponse>;
  FindByprofile(data: Map<string, any>): Promise<BMResponse>;
  FindByuserProfileId(data: Map<string, any>): Promise<BMResponse>;
  FindBycontactItemId(data: Map<string, any>): Promise<BMResponse>;
  FindByrole(data: Map<string, any>): Promise<BMResponse>;
  FindBylocation(data: Map<string, any>): Promise<BMResponse>;
  UpdatedisplayName(data: Map<string, any>): Promise<BMResponse>;
  UpdateuserHandleId(data: Map<string, any>): Promise<BMResponse>;
  UpdateAcceptedOfferId(data: Map<string, any>): Promise<BMResponse>;
  UpdateCounterOfferId(data: Map<string, any>): Promise<BMResponse>;
  UpdateUserCartId(data: Map<string, any>): Promise<BMResponse>;
  UpdateuserAboutId(data: Map<string, any>): Promise<BMResponse>;
  UpdatepickupId(data: Map<string, any>): Promise<BMResponse>;
  UpdatereferralId(data: Map<string, any>): Promise<BMResponse>;
  UpdateUsersquareModId(data: Map<string, any>): Promise<BMResponse>;
  Updatefirst_name(data: Map<string, any>): Promise<BMResponse>;
  Updatelast_name(data: Map<string, any>): Promise<BMResponse>;
  Updateemail(data: Map<string, any>): Promise<BMResponse>;
  Updatepassword(data: Map<string, any>): Promise<BMResponse>;
  UpdatecontactItemId(data: Map<string, any>): Promise<BMResponse>;
  Updaterole(data: Map<string, any>): Promise<BMResponse>;
  Updatelocation(data: Map<string, any>): Promise<BMResponse>;
}