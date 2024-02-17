import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { IInventory } from './IInventory';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('inventory')
@ApiTags('Inventory 🎮🗃️')
export class InventoryController implements IInventory {
  constructor(private readonly inventoryService: InventoryService) {}
  logger: Logger;
  @Post('Getgames')
  Getgames(@Body() data: Map<string, any>): BMResponse {
    return this.inventoryService.Getgames(data);
  }
  @Post('GetUserProfile')
  GetUserProfile(@Body() data: Map<string, any>): BMResponse {
    return this.inventoryService.GetUserProfile(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): BMResponse {
    return this.inventoryService.FindByid(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.inventoryService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.inventoryService.FindByupdatedAt(data);
  }
  @Post('AddGame')
  AddGame(@Body() data: Map<string, any>): BMResponse {
    return this.inventoryService.AddGame(data);
  }
  @Post('RemoveGame')
  RemoveGame(@Body() data: Map<string, any>): BMResponse {
    return this.inventoryService.RemoveGame(data);
  }
  @Post('AddProfile')
  AddProfile(@Body() data: Map<string, any>): BMResponse {
    return this.inventoryService.AddProfile(data);
  }
  @Post('RemoveProfile')
  RemoveProfile(@Body() data: Map<string, any>): BMResponse {
    return this.inventoryService.RemoveProfile(data);
  }
}
