import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { IOrder } from './IOrder';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('order')
@ApiTags('Order')
export class OrderController implements IOrder {
  constructor(private readonly orderService: OrderService) {}
  @Post('CreateOrder')
  CreateOrder(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.CreateOrder(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindByid(data);
  }
  @Post('FindByAgentToId')
  FindByAgentToId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindByAgentToId(data);
  }
  @Post('FindByAgentFromId')
  FindByAgentFromId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindByAgentFromId(data);
  }
  @Post('FindByswapId')
  FindByswapId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindByswapId(data);
  }
  @Post('FindByPickupId')
  FindByPickupId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindByPickupId(data);
  }
  @Post('FindBySaleId')
  FindBySaleId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindBySaleId(data);
  }
  @Post('FindByorderQueueId')
  FindByorderQueueId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindByorderQueueId(data);
  }
  @Post('FindBystatus')
  FindBystatus(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindBystatus(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.FindByupdatedAt(data);
  }
  @Post('UpdateAgentToId')
  UpdateAgentToId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.UpdateAgentToId(data);
  }
  @Post('UpdateAgentFromId')
  UpdateAgentFromId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.UpdateAgentFromId(data);
  }
  @Post('UpdateswapId')
  UpdateswapId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.UpdateswapId(data);
  }
  @Post('UpdatePickupId')
  UpdatePickupId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.UpdatePickupId(data);
  }
  @Post('UpdateSaleId')
  UpdateSaleId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.UpdateSaleId(data);
  }
  @Post('UpdateorderQueueId')
  UpdateorderQueueId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.UpdateorderQueueId(data);
  }
  @Post('Updatestatus')
  Updatestatus(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.orderService.Updatestatus(data);
  }
}
