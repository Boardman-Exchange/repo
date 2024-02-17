import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface ICounteroffer extends ICommons {
  CreateCounterOffer(data: Map<string, any>): BMResponse;
  AcceptCounterOffer(data: Map<string, any>): BMResponse;
  FindByid(data: Map<string, any>): BMResponse;
  FindByGameId(data: Map<string, any>): BMResponse;
  FindByprofileId(data: Map<string, any>): BMResponse;
  FindByOfferId(data: Map<string, any>): BMResponse;
  FindBycreatedAt(data: Map<string, any>): BMResponse;
  FindByupdatedAt(data: Map<string, any>): BMResponse;
  FindByAcceptedOfferId(data: Map<string, any>): BMResponse;
  UpdateGameId(data: Map<string, any>): BMResponse;
  UpdateprofileId(data: Map<string, any>): BMResponse;
  UpdateOfferId(data: Map<string, any>): BMResponse;
  UpdateAcceptedOfferId(data: Map<string, any>): BMResponse;
}
