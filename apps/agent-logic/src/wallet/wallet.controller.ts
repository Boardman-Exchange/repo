import { Controller, Post, Body, Logger } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { IAWallet } from './IAWallet';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('wallet')
@ApiTags('Wallet')
export class WalletController implements IAWallet {
  logger: Logger;
  constructor(private readonly walletService: WalletService) {}
  @Post('CreateWallet')
  CreateWallet(data: Map<string, any>): Promise<BMResponse> {
    return this.CreateWallet(data);
  }
  @Post('WithdrawToBank')
  WithdrawToBank(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.WithdrawToBank(data);
  }
  @Post('WithdrawToCrypto')
  WithdrawToCrypto(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.WithdrawToCrypto(data);
  }
  @Post('GetBalance')
  GetBalance(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.GetBalance(data);
  }
  @Post('UpdateBalance')
  UpdateBalance(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.UpdateBalance(data);
  }
}
