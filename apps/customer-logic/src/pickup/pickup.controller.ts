import { Controller, Post, Get, Logger, Body } from '@nestjs/common';
import { PickupService } from './pickup.service';
import { IPickup } from './IPickup';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('pickup')
@ApiTags('Pickup ⌧')
export class PickupController implements IPickup {
  constructor(private readonly pickupService: PickupService) {}
  logger: Logger;
  @Post('CreatePickup')
  CreatePickup(@Body() data: Map<string, any>): BMResponse {
    return this.pickupService.CreatePickup(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): BMResponse {
    return this.pickupService.FindByid(data);
  }
  @Post('FindByuserProfileId')
  FindByuserProfileId(@Body() data: Map<string, any>): BMResponse {
    return this.pickupService.FindByuserProfileId(data);
  }
  @Post('GetOrders')
  GetOrders(@Body() data: Map<string, any>): BMResponse {
    return this.pickupService.GetOrders(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.pickupService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.pickupService.FindByupdatedAt(data);
  }
  @Post('UpdateuserProfileId')
  UpdateuserProfileId(@Body() data: Map<string, any>): BMResponse {
    return this.pickupService.UpdateuserProfileId(data);
  }
  @Post('UpdateOrderId')
  UpdateOrderId(@Body() data: Map<string, any>): BMResponse {
    return this.pickupService.UpdateOrderId(data);
  }
}
