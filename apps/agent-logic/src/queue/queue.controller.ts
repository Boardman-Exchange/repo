import { Controller, Post, Body, Logger } from '@nestjs/common';
import { QueueService } from './queue.service';
import { IQueue } from './IQueue';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('queue')
@ApiTags('Queue')
export class QueueController implements IQueue {
  logger: Logger;
  constructor(private readonly queueService: QueueService) {}
  @Post('CreateQueue')
  CreateQueue(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.queueService.CreateQueue(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.queueService.FindByid(data);
  }
  @Post('FindByBoardmanId')
  FindByBoardmanId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.queueService.FindByBoardmanId(data);
  }
  @Post('GetOrders')
  GetOrders(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.queueService.GetOrders(data);
  }
  @Post('AddOrders')
  AddOrders(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.queueService.AddOrders(data);
  }
  @Post('RemoveOrders')
  RemoveOrders(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.queueService.RemoveOrders(data);
  }
}
