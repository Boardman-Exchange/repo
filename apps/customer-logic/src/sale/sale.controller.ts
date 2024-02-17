import { Body, Controller, Logger, Post } from '@nestjs/common';
import { SaleService } from './sale.service';
import { ISale } from './ISale';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('sale')
@ApiTags('Sale 💸')
export class SaleController implements ISale {
  constructor(private readonly saleService: SaleService) {}
  logger: Logger;
  @Post('CreateSale')
  CreateSale(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.CreateSale(data);
  }
  @Post('GetBookmarkable')
  GetBookmarkable(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.GetBookmarkable(data);
  }
  @Post('GetOrder')
  GetOrder(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.GetOrder(data);
  }
  @Post('FindById')
  FindById(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.FindById(data);
  }
  @Post('FindByuserCartId')
  FindByuserCartId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.FindByuserCartId(data);
  }
  @Post('FindByuserProfileId')
  FindByuserProfileId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.FindByuserProfileId(data);
  }
  @Post('FindBybuyerId')
  FindBybuyerId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.FindBybuyerId(data);
  }
  @Post('FindByuserFeedId')
  FindByuserFeedId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.FindByuserFeedId(data);
  }
  @Post('FindByGameId')
  FindByGameId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.FindByGameId(data);
  }
  @Post('FindBysalesChargeId')
  FindBysalesChargeId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.FindBysalesChargeId(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.FindByupdatedAt(data);
  }
  @Post('UpdateuserCartId')
  UpdateuserCartId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.UpdateuserCartId(data);
  }
  @Post('UpdateuserProfileId')
  UpdateuserProfileId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.UpdateuserProfileId(data);
  }
  @Post('UpdatebuyerId')
  UpdatebuyerId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.UpdatebuyerId(data);
  }
  @Post('UpdateuserFeedId')
  UpdateuserFeedId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.UpdateuserFeedId(data);
  }
  @Post('UpdateGameId')
  UpdateGameId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.UpdateGameId(data);
  }
  @Post('UpdatesalesChargeId')
  UpdatesalesChargeId(@Body() data: Map<string, any>): BMResponse {
    return this.saleService.UpdatesalesChargeId(data);
  }
}
