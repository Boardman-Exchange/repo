import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface IQueue extends ICommons {
  CreateQueue(data: Map<string, any>): Promise<BMResponse>;
  FindByid(data: Map<string, any>): Promise<BMResponse>;
  FindByBoardmanId(data: Map<string, any>): Promise<BMResponse>;
  GetOrders(data: Map<string, any>): Promise<BMResponse>;
  AddOrders(data: Map<string, any>): Promise<BMResponse>;
  RemoveOrders(data: Map<string, any>): Promise<BMResponse>;
}
