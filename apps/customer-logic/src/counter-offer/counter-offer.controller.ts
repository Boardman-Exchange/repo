import { Controller, Post, Body, Logger } from '@nestjs/common';
import { CounterOfferService } from './counter-offer.service';
import { ICounteroffer } from './ICOffer';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('counter-offer')
@ApiTags('Counter Offer ✰')
export class CounterOfferController implements ICounteroffer {
  constructor(private readonly counterOfferService: CounterOfferService) {}
  logger: Logger;
  @Post('CreateCounterOffer')
  CreateCounterOffer(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.CreateCounterOffer(data);
  }
  @Post('AcceptCounterOffer')
  AcceptCounterOffer(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.AcceptCounterOffer(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.FindByid(data);
  }
  @Post('FindByGameId')
  FindByGameId(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.FindByGameId(data);
  }
  @Post('FindByprofileId')
  FindByprofileId(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.FindByprofileId(data);
  }
  @Post('FindByOfferId')
  FindByOfferId(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.FindByOfferId(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.FindByupdatedAt(data);
  }
  @Post('FindByAcceptedOfferId')
  FindByAcceptedOfferId(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.FindByAcceptedOfferId(data);
  }
  @Post('UpdateGameId')
  UpdateGameId(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.UpdateGameId(data);
  }
  @Post('UpdateprofileId')
  UpdateprofileId(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.UpdateprofileId(data);
  }
  @Post('UpdateOfferId')
  UpdateOfferId(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.UpdateOfferId(data);
  }
  @Post('UpdateAcceptedOfferId')
  UpdateAcceptedOfferId(@Body() data: Map<string, any>): BMResponse {
    return this.counterOfferService.UpdateAcceptedOfferId(data);
  }
}
