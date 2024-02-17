import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface IInventory  extends ICommons{
  Getgames(data: Map<string, any>): BMResponse;
  GetUserProfile(data: Map<string, any>): BMResponse;
  FindByid(data: Map<string, any>): BMResponse;
  FindBycreatedAt(data: Map<string, any>): BMResponse;
  FindByupdatedAt(data: Map<string, any>): BMResponse;
  AddGame(data: Map<string, any>): BMResponse;
  RemoveGame(data: Map<string, any>): BMResponse;
  AddProfile(data: Map<string, any>): BMResponse;
  RemoveProfile(data: Map<string, any>): BMResponse;
}
