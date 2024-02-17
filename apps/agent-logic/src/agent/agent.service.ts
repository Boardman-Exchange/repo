import { Injectable, Logger } from '@nestjs/common';
import { IAgent } from './IAgent';
import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class AgentService implements IAgent, ICommons {
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(AgentService.name, {
      timestamp: true,
    });
  }
  CreateAgent(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  GetOrderTo(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  GetOrderFrom(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Getnotifications(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Getlogins(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  AddOrderTo(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  AddOrderFrom(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Addnotifications(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  RemoveOrderTo(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  RemoveOrderFrom(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Removenotifications(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Removelogins(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByfirst_name(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindBylast_name(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByemail(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindBypassword(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindBylocation(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByqueueId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindBycreatedAt(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByupdatedAt(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Updatefirst_name(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Updatelast_name(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Updateemail(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Updatepassword(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  Updatelocation(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  UpdatequeueId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  logger: Logger;
}
