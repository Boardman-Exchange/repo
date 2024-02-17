import { Controller, Post, Body, Logger } from '@nestjs/common';
import { OfferService } from './offer.service';
import { IOffer } from './IOffer.interface';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('offer')
@ApiTags('Offer  🖇️')
export class OfferController implements IOffer {
  constructor(private readonly offerService: OfferService) {}
  logger: Logger;
  @Post('CreateOffer')
  CreateOffer(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.CreateOffer(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindByid(data);
  }
  @Post('FindByWindow')
  FindByWindow(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindByWindow(data);
  }
  @Post('FindByTitle')
  FindByTitle(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindByTitle(data);
  }
  @Post('FindByuserProfileId')
  FindByuserProfileId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindByuserProfileId(data);
  }
  @Post('FindByuserGameId')
  FindByuserGameId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindByuserGameId(data);
  }
  @Post('FindByUserGameSwapId')
  FindByUserGameSwapId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindByUserGameSwapId(data);
  }
  @Post('FindByBookmarkableId')
  FindByBookmarkableId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindByBookmarkableId(data);
  }
  @Post('FindByStatus')
  FindByStatus(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindByStatus(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.FindByupdatedAt(data);
  }
  @Post('UpdateWindow')
  UpdateWindow(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.UpdateWindow(data);
  }
  @Post('UpdateTitle')
  UpdateTitle(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.UpdateTitle(data);
  }
  @Post('UpdateuserProfileId')
  UpdateuserProfileId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.UpdateuserProfileId(data);
  }
  @Post('UpdateuserGameId')
  UpdateuserGameId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.UpdateuserGameId(data);
  }
  @Post('UpdateUserGameSwapId')
  UpdateUserGameSwapId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.UpdateUserGameSwapId(data);
  }
  @Post('UpdateBookmarkableId')
  UpdateBookmarkableId(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.UpdateBookmarkableId(data);
  }
  @Post('UpdateStatus')
  UpdateStatus(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.offerService.UpdateStatus(data);
  }
}
