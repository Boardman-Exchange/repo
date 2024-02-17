import { Controller, Logger, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { IWallet } from './IWallet';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('wallet')
@ApiTags('Wallet 💰')
export class WalletController implements IWallet {
  constructor(private readonly walletService: WalletService) {}
  logger: Logger;
  @Post('PayWithCrypto')
  PayWithCrypto(data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.PayWithCrypto(data);
  }
  @Post('DepositWithCard')
  DepositWithCard(data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.DepositWithCard(data);
  }
  @Post('DepositWithCrypto')
  DepositWithCrypto(data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.DepositWithCrypto(data);
  }
  @Post('WithdrawToBank')
  WithdrawToBank(data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.WithdrawToBank(data);
  }
  @Post('WithdrawToCrypto')
  WithdrawToCrypto(data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.WithdrawToCrypto(data);
  }
  @Post('PayWithBalance')
  PayWithBalance(data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.PayWithBalance(data);
  }
  @Post('PayWithCard')
  PayWithCard(data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.PayWithCard(data);
  }
  @Post('GetBalance')
  GetBalance(data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.GetBalance(data);
  }
  // @Post('UpdateBalance')
  UpdateBalance(data: Map<string, any>): Promise<BMResponse> {
    return this.walletService.UpdateBalance(data);
  }
}
