import BMResponse from '@app/boardman-commons/IResponse';

export interface IOrder {
  CreateOrder(data: Map<string, any>): Promise<BMResponse>;
  FindByid(data: Map<string, any>): Promise<BMResponse>;
  FindByAgentToId(data: Map<string, any>): Promise<BMResponse>;
  FindByAgentFromId(data: Map<string, any>): Promise<BMResponse>;
  FindByswapId(data: Map<string, any>): Promise<BMResponse>;
  FindByPickupId(data: Map<string, any>): Promise<BMResponse>;
  FindBySaleId(data: Map<string, any>): Promise<BMResponse>;
  FindByorderQueueId(data: Map<string, any>): Promise<BMResponse>;
  FindBystatus(data: Map<string, any>): Promise<BMResponse>;
  FindBycreatedAt(data: Map<string, any>): Promise<BMResponse>;
  FindByupdatedAt(data: Map<string, any>): Promise<BMResponse>;
  UpdateAgentToId(data: Map<string, any>): Promise<BMResponse>;
  UpdateAgentFromId(data: Map<string, any>): Promise<BMResponse>;
  UpdateswapId(data: Map<string, any>): Promise<BMResponse>;
  UpdatePickupId(data: Map<string, any>): Promise<BMResponse>;
  UpdateSaleId(data: Map<string, any>): Promise<BMResponse>;
  UpdateorderQueueId(data: Map<string, any>): Promise<BMResponse>;
  Updatestatus(data: Map<string, any>): Promise<BMResponse>;
}
