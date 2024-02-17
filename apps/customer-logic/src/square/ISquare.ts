import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface ISquare extends ICommons {
  CreateSquare(data: Map<string, any>): BMResponse;
  Getmembers(data: Map<string, any>): BMResponse;
  Addmembers(data: Map<string, any>): BMResponse;
  Removemembers(data: Map<string, any>): BMResponse;
  UpdatephotoPath(data: Map<string, any>): BMResponse;
  UpdateAbout(data: Map<string, any>): BMResponse;
  FindByid(data: Map<string, any>): BMResponse;
  FindByName(data: Map<string, any>): BMResponse;
  FindByUsersquareModId(data: Map<string, any>): BMResponse;
  GetMods(data: Map<string, any>): BMResponse;
  AddMods(data: Map<string, any>): BMResponse;
  RemoveMods(data: Map<string, any>): BMResponse;
  FindBygameSwapThreadId(data: Map<string, any>): BMResponse;
  GetThread(data: Map<string, any>): BMResponse;
  AddThread(data: Map<string, any>): BMResponse;
  RemoveThread(data: Map<string, any>): BMResponse;
  FindBycreatedAt(data: Map<string, any>): BMResponse;
  FindByupdatedAt(data: Map<string, any>): BMResponse;
  UpdateName(data: Map<string, any>): BMResponse;
  UpdateUsersquareModId(data: Map<string, any>): BMResponse;
  UpdategameSwapThreadId(data: Map<string, any>): BMResponse;
}
