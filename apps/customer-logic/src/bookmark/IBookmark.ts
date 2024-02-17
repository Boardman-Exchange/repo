import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface IBookmark  extends ICommons{
  Getitems(data: Map<string, any>): BMResponse;
  Additem(data: Map<string, any>): BMResponse;
  Removeitem(data: Map<string, any>): BMResponse;
  FindById(data: Map<string, any>): BMResponse;
  FindByUserProfileId(data: Map<string, any>): BMResponse;
  FindBycreatedAt(data: Map<string, any>): BMResponse;
  FindByupdatedAt(data: Map<string, any>): BMResponse;
}
