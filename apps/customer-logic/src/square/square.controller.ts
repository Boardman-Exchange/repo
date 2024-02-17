import { Controller, Post, Body, Logger } from '@nestjs/common';
import { SquareService } from './square.service';
import { ISquare } from './ISquare';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('square')
@ApiTags('Square 🤝')
export class SquareController implements ISquare {
  constructor(private readonly squareService: SquareService) {}
  logger: Logger;
  @Post('CreateSquare')
  CreateSquare(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.CreateSquare(data);
  }
  @Post('Getmembers')
  Getmembers(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.Getmembers(data);
  }
  @Post('Addmembers')
  Addmembers(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.Addmembers(data);
  }
  @Post('Removemembers')
  Removemembers(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.Removemembers(data);
  }
  @Post('UpdatephotoPath')
  UpdatephotoPath(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.UpdatephotoPath(data);
  }
  @Post('UpdateAbout')
  UpdateAbout(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.UpdateAbout(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.FindByid(data);
  }
  @Post('FindByName')
  FindByName(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.FindByName(data);
  }
  @Post('FindByUsersquareModId')
  FindByUsersquareModId(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.FindByUsersquareModId(data);
  }
  @Post('GetMods')
  GetMods(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.GetMods(data);
  }
  @Post('AddMods')
  AddMods(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.AddMods(data);
  }
  @Post('RemoveMods')
  RemoveMods(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.RemoveMods(data);
  }
  @Post('FindBygameSwapThreadId')
  FindBygameSwapThreadId(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.FindBygameSwapThreadId(data);
  }
  @Post('GetThread')
  GetThread(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.GetThread(data);
  }
  @Post('AddThread')
  AddThread(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.AddThread(data);
  }
  @Post('RemoveThread')
  RemoveThread(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.RemoveThread(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.FindByupdatedAt(data);
  }
  @Post('UpdateName')
  UpdateName(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.UpdateName(data);
  }
  @Post('UpdateUsersquareModId')
  UpdateUsersquareModId(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.UpdateUsersquareModId(data);
  }
  @Post('UpdategameSwapThreadId')
  UpdategameSwapThreadId(@Body() data: Map<string, any>): BMResponse {
    return this.squareService.UpdategameSwapThreadId(data);
  }
}
