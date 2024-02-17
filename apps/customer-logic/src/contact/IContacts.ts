import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface IContacts extends ICommons{
  Getcontacts(data: Map<string, any>): BMResponse;
  Addcontact(data: Map<string, any>): BMResponse;
  Removecontact(data: Map<string, any>): BMResponse;
  FindByid(data: Map<string, any>): BMResponse;
  FindByuserProfileId(data: Map<string, any>): BMResponse;
  FindBycreatedAt(data: Map<string, any>): BMResponse;
  FindByupdatedAt(data: Map<string, any>): BMResponse;
}
