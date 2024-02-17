import { Injectable, Logger } from '@nestjs/common';
import { IOrder } from './IOrder';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';
import ICommons from '@app/boardman-commons/ICommons';

@Injectable()
export class OrderService implements IOrder, ICommons {
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(OrderService.name, {
      timestamp: true,
    });
  }
  logger: Logger;
  CreateOrder(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByAgentToId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByAgentFromId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByswapId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByPickupId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindBySaleId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByorderQueueId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindBystatus(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindBycreatedAt(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByupdatedAt(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  UpdateAgentToId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  UpdateAgentFromId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  UpdateswapId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  UpdatePickupId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  UpdateSaleId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  UpdateorderQueueId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Updatestatus(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
}
