import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface IGame extends ICommons{
  CreateGame(data: Map<string, any>): Promise<BMResponse>;
  FindByid(data: Map<string, any>): Promise<BMResponse>;
  FindByTitle(data: Map<string, any>): Promise<BMResponse>;
  FindByconsoleId(data: Map<string, any>): Promise<BMResponse>;
  FindBygenreId(data: Map<string, any>): Promise<BMResponse>;
  FindByUserGameOfferId(data: Map<string, any>): Promise<BMResponse>;
  FindByUserSaleId(data: Map<string, any>): Promise<BMResponse>;
  FindByuserInventoryId(data: Map<string, any>): Promise<BMResponse>;
  FindByCounterOfferId(data: Map<string, any>): Promise<BMResponse>;
  FindBycreatedAt(data: Map<string, any>): Promise<BMResponse>;
  FindByupdatedAt(data: Map<string, any>): Promise<BMResponse>;
  UpdateTitle(data: Map<string, any>): Promise<BMResponse>;
  UpdateconsoleId(data: Map<string, any>): Promise<BMResponse>;
  UpdategenreId(data: Map<string, any>): Promise<BMResponse>;
  UpdateUserGameOfferId(data: Map<string, any>): Promise<BMResponse>;
  UpdateUserSaleId(data: Map<string, any>): Promise<BMResponse>;
  UpdateuserInventoryId(data: Map<string, any>): Promise<BMResponse>;
  UpdateCounterOfferId(data: Map<string, any>): Promise<BMResponse>;
  UpdatePhotoPath(data: Map<string, any>): Promise<BMResponse>;
}
