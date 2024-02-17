import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ICustomer } from './ICustomer';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('customer')
@ApiTags('Customer 💆')
export class CustomerController implements ICustomer {
  constructor(private readonly customerService: CustomerService) {}
  logger: Logger;
  @Post('CreateCustomer')
  CreateCustomer(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.CreateCustomer(data);
  }
  @Post('FindById')
  FindById(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindById(data);
  }
  @Post('FindBydisplayName')
  FindBydisplayName(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindBydisplayName(data);
  }
  @Post('FindByuserHandle')
  FindByuserHandle(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByuserHandle(data);
  }
  @Post('FindByuserContactsId')
  FindByuserContactsId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByuserContactsId(data);
  }
  @Post('FindByuserInventoryId')
  FindByuserInventoryId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByuserInventoryId(data);
  }
  @Post('FindBysquareId')
  FindBysquareId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindBysquareId(data);
  }
  @Post('FindByuserBookmarkId')
  FindByuserBookmarkId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByuserBookmarkId(data);
  }
  @Post('FindByUserId')
  FindByUserId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByUserId(data);
  }
  @Post('FindByAcceptedOfferId')
  FindByAcceptedOfferId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByAcceptedOfferId(data);
  }
  @Post('FindByCounterOfferId')
  FindByCounterOfferId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByCounterOfferId(data);
  }
  @Post('FindByUserWalletId')
  FindByUserWalletId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByUserWalletId(data);
  }
  @Post('FindByUserCartId')
  FindByUserCartId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByUserCartId(data);
  }
  @Post('FindBypickupId')
  FindBypickupId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindBypickupId(data);
  }
  @Post('FindByreferralId')
  FindByreferralId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByreferralId(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByupdatedAt(data);
  }
  @Post('FindByUsersquareModId')
  FindByUsersquareModId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByUsersquareModId(data);
  }
  @Post('FindByfirst_name')
  FindByfirst_name(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByfirst_name(data);
  }
  @Post('FindBylast_name')
  FindBylast_name(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindBylast_name(data);
  }
  @Post('FindByemail')
  FindByemail(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByemail(data);
  }
  @Post('FindBypassword')
  FindBypassword(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindBypassword(data);
  }
  @Post('FindByprofile')
  FindByprofile(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByprofile(data);
  }
  @Post('FindByuserProfileId')
  FindByuserProfileId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByuserProfileId(data);
  }
  @Post('FindBycontactItemId')
  FindBycontactItemId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindBycontactItemId(data);
  }
  @Post('FindByrole')
  FindByrole(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindByrole(data);
  }
  @Post('FindBylocation')
  FindBylocation(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.FindBylocation(data);
  }
  @Post('UpdatedisplayName')
  UpdatedisplayName(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdatedisplayName(data);
  }
  @Post('UpdateuserHandleId')
  UpdateuserHandleId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdateuserHandleId(data);
  }
  @Post('UpdateAcceptedOfferId')
  UpdateAcceptedOfferId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdateAcceptedOfferId(data);
  }
  @Post('UpdateCounterOfferId')
  UpdateCounterOfferId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdateCounterOfferId(data);
  }
  @Post('UpdateUserCartId')
  UpdateUserCartId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdateUserCartId(data);
  }
  @Post('UpdateuserAboutId')
  UpdateuserAboutId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdateuserAboutId(data);
  }
  @Post('UpdatepickupId')
  UpdatepickupId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdatepickupId(data);
  }
  @Post('UpdatereferralId')
  UpdatereferralId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdatereferralId(data);
  }
  @Post('UpdateUsersquareModId')
  UpdateUsersquareModId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdateUsersquareModId(data);
  }
  @Post('Updatefirst_name')
  Updatefirst_name(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.Updatefirst_name(data);
  }
  @Post('Updatelast_name')
  Updatelast_name(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.Updatelast_name(data);
  }
  @Post('Updateemail')
  Updateemail(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.Updateemail(data);
  }
  @Post('Updatepassword')
  Updatepassword(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.Updatepassword(data);
  }
  @Post('UpdatecontactItemId')
  UpdatecontactItemId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.UpdatecontactItemId(data);
  }
  @Post('Updaterole')
  Updaterole(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.Updaterole(data);
  }
  @Post('Updatelocation')
  Updatelocation(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.customerService.Updatelocation(data);
  }
}
