import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface ISwap extends ICommons {
  CreateSwap(data: Map<string, any>);
  GetUserDispute(data: Map<string, any>): BMResponse;
  GetOrder(data: Map<string, any>): BMResponse;
  FindByid(data: Map<string, any>): BMResponse;
  FindByuserProfileId(data: Map<string, any>): BMResponse;
  FindByuserOfferId(data: Map<string, any>): BMResponse;
  FindBygameSwapThreadId(data: Map<string, any>): BMResponse;
  FindByLocation(data: Map<string, any>): BMResponse;
  FindBycreatedAt(data: Map<string, any>): BMResponse;
  FindByupdatedAt(data: Map<string, any>): BMResponse;
  UpdateuserProfileId(data: Map<string, any>): BMResponse;
  UpdateuserOfferId(data: Map<string, any>): BMResponse;
  UpdategameSwapThreadId(data: Map<string, any>): BMResponse;
}
