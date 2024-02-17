import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface IPickup  extends ICommons{
  CreatePickup(data: Map<string, any>): BMResponse;
  FindByid(data: Map<string, any>): BMResponse;
  FindByuserProfileId(data: Map<string, any>): BMResponse;
  GetOrders(data: Map<string, any>): BMResponse;
  FindBycreatedAt(data: Map<string, any>): BMResponse;
  FindByupdatedAt(data: Map<string, any>): BMResponse;
  UpdateuserProfileId(data: Map<string, any>): BMResponse;
  UpdateOrderId(data: Map<string, any>): BMResponse;
}
