import { Controller, Post, Body, Logger } from '@nestjs/common';
import { GameService } from './game.service';
import { IGame } from './IGame';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('game')
@ApiTags('Game 🎮')
export class GameController implements IGame {
  logger: Logger;
  constructor(private readonly gameService: GameService) {}
  @Post('CreateGame')
  CreateGame(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.CreateGame(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindByid(data);
  }
  @Post('FindByTitle')
  FindByTitle(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindByTitle(data);
  }
  @Post('FindByconsoleId')
  FindByconsoleId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindByconsoleId(data);
  }
  @Post('FindBygenreId')
  FindBygenreId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindBygenreId(data);
  }
  @Post('FindByUserGameOfferId')
  FindByUserGameOfferId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindByUserGameOfferId(data);
  }
  @Post('FindByUserSaleId')
  FindByUserSaleId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindByUserSaleId(data);
  }
  @Post('FindByuserInventoryId')
  FindByuserInventoryId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindByuserInventoryId(data);
  }
  @Post('FindByCounterOfferId')
  FindByCounterOfferId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindByCounterOfferId(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.FindByupdatedAt(data);
  }
  @Post('UpdateTitle')
  UpdateTitle(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.UpdateTitle(data);
  }
  @Post('UpdateconsoleId')
  UpdateconsoleId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.UpdateconsoleId(data);
  }
  @Post('UpdategenreId')
  UpdategenreId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.UpdategenreId(data);
  }
  @Post('UpdateUserGameOfferId')
  UpdateUserGameOfferId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.UpdateUserGameOfferId(data);
  }
  @Post('UpdateUserSaleId')
  UpdateUserSaleId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.UpdateUserSaleId(data);
  }
  @Post('UpdateuserInventoryId')
  UpdateuserInventoryId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.UpdateuserInventoryId(data);
  }
  @Post('UpdateCounterOfferId')
  UpdateCounterOfferId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.UpdateCounterOfferId(data);
  }
  @Post('UpdatePhotoPath')
  UpdatePhotoPath(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.gameService.UpdatePhotoPath(data);
  }
}
