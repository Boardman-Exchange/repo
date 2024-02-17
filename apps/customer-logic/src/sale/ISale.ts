import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface ISale extends ICommons {
  CreateSale(data: Map<string, any>): BMResponse;
  GetBookmarkable(data: Map<string, any>): BMResponse;
  GetOrder(data: Map<string, any>): BMResponse;
  FindById(data: Map<string, any>): BMResponse;
  FindByuserCartId(data: Map<string, any>): BMResponse;
  FindByuserProfileId(data: Map<string, any>): BMResponse;
  FindBybuyerId(data: Map<string, any>): BMResponse;
  FindByuserFeedId(data: Map<string, any>): BMResponse;
  FindByGameId(data: Map<string, any>): BMResponse;
  FindBysalesChargeId(data: Map<string, any>): BMResponse;
  FindBycreatedAt(data: Map<string, any>): BMResponse;
  FindByupdatedAt(data: Map<string, any>): BMResponse;
  UpdateuserCartId(data: Map<string, any>): BMResponse;
  UpdateuserProfileId(data: Map<string, any>): BMResponse;
  UpdatebuyerId(data: Map<string, any>): BMResponse;
  UpdateuserFeedId(data: Map<string, any>): BMResponse;
  UpdateGameId(data: Map<string, any>): BMResponse;
  UpdatesalesChargeId(data: Map<string, any>): BMResponse;
}
