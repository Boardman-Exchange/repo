import { Controller, Post, Body } from '@nestjs/common';
import { AgentService } from './agent.service';
import { IAgent } from './IAgent';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('agent')
@ApiTags('Agent')
export class AgentController implements IAgent {
  constructor(private readonly agentService: AgentService) {}
  @Post('CreateAgent')
  CreateAgent(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.CreateAgent(data);
  }
  @Post('GetOrderTo')
  GetOrderTo(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.GetOrderTo(data);
  }
  @Post('GetOrderFrom')
  GetOrderFrom(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.GetOrderFrom(data);
  }
  @Post('Getnotifications')
  Getnotifications(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Getnotifications(data);
  }
  @Post('Getlogins')
  Getlogins(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Getlogins(data);
  }
  @Post('AddOrderTo')
  AddOrderTo(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.AddOrderTo(data);
  }
  @Post('AddOrderFrom')
  AddOrderFrom(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.AddOrderFrom(data);
  }
  @Post('Addnotifications')
  Addnotifications(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Addnotifications(data);
  }
  @Post('RemoveOrderTo')
  RemoveOrderTo(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.RemoveOrderTo(data);
  }
  @Post('RemoveOrderFrom')
  RemoveOrderFrom(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.RemoveOrderFrom(data);
  }
  @Post('Removenotifications')
  Removenotifications(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Removenotifications(data);
  }
  @Post('Removelogins')
  Removelogins(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Removelogins(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.FindByid(data);
  }
  @Post('FindByfirst_name')
  FindByfirst_name(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.FindByfirst_name(data);
  }
  @Post('FindBylast_name')
  FindBylast_name(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.FindBylast_name(data);
  }
  @Post('FindByemail')
  FindByemail(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.FindByemail(data);
  }
  @Post('FindBypassword')
  FindBypassword(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.FindBypassword(data);
  }
  @Post('FindBylocation')
  FindBylocation(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.FindBylocation(data);
  }
  @Post('FindByqueueId')
  FindByqueueId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.FindByqueueId(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.FindByupdatedAt(data);
  }
  @Post('Updatefirst_name')
  Updatefirst_name(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Updatefirst_name(data);
  }
  @Post('Updatelast_name')
  Updatelast_name(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Updatelast_name(data);
  }
  @Post('Updateemail')
  Updateemail(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Updateemail(data);
  }
  @Post('Updatepassword')
  Updatepassword(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Updatepassword(data);
  }
  @Post('Updatelocation')
  Updatelocation(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.Updatelocation(data);
  }
  @Post('UpdatequeueId')
  UpdatequeueId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.agentService.UpdatequeueId(data);
  }
}
