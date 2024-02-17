import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface IOffer extends ICommons {
  CreateOffer(data: Map<string, any>): Promise<BMResponse>;
  FindByid(data: Map<string, any>): Promise<BMResponse>;
  FindByWindow(data: Map<string, any>): Promise<BMResponse>;
  FindByTitle(data: Map<string, any>): Promise<BMResponse>;
  FindByuserProfileId(data: Map<string, any>): Promise<BMResponse>;
  FindByuserGameId(data: Map<string, any>): Promise<BMResponse>;
  FindByUserGameSwapId(data: Map<string, any>): Promise<BMResponse>;
  FindByBookmarkableId(data: Map<string, any>): Promise<BMResponse>;
  FindByStatus(data: Map<string, any>): Promise<BMResponse>;
  FindBycreatedAt(data: Map<string, any>): Promise<BMResponse>;
  FindByupdatedAt(data: Map<string, any>): Promise<BMResponse>;
  UpdateWindow(data: Map<string, any>): Promise<BMResponse>;
  UpdateTitle(data: Map<string, any>): Promise<BMResponse>;
  UpdateuserProfileId(data: Map<string, any>): Promise<BMResponse>;
  UpdateuserGameId(data: Map<string, any>): Promise<BMResponse>;
  UpdateUserGameSwapId(data: Map<string, any>): Promise<BMResponse>;
  UpdateBookmarkableId(data: Map<string, any>): Promise<BMResponse>;
  UpdateStatus(data: Map<string, any>): Promise<BMResponse>;
}
