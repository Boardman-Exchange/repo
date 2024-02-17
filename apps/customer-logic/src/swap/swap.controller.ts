import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { SwapService } from './swap.service';
import { ISwap } from './ISwap';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('swap')
@ApiTags('Swap 🎮💱')
export class SwapController implements ISwap {
  constructor(private readonly swapService: SwapService) {}
  logger: Logger;
  @Post('CreateSwap')
  CreateSwap(@Body() data: Map<string, any>) {
    return this.swapService.CreateSwap(data);
  }
  @Post('GetUserDispute')
  GetUserDispute(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.GetUserDispute(data);
  }
  @Post('GetOrder')
  GetOrder(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.GetOrder(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.FindByid(data);
  }
  @Post('FindByuserProfileId')
  FindByuserProfileId(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.FindByuserProfileId(data);
  }
  @Post('FindByuserOfferId')
  FindByuserOfferId(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.FindByuserOfferId(data);
  }
  @Post('FindBygameSwapThreadId')
  FindBygameSwapThreadId(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.FindBygameSwapThreadId(data);
  }
  @Post('FindByLocation')
  FindByLocation(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.FindByLocation(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.FindByupdatedAt(data);
  }
  @Post('UpdateuserProfileId')
  UpdateuserProfileId(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.UpdateuserProfileId(data);
  }
  @Post('UpdateuserOfferId')
  UpdateuserOfferId(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.UpdateuserOfferId(data);
  }
  @Post('UpdategameSwapThreadId')
  UpdategameSwapThreadId(@Body() data: Map<string, any>): BMResponse {
    return this.swapService.UpdategameSwapThreadId(data);
  }
}
