import { Injectable, Logger } from '@nestjs/common';
import { IPayments } from './services/IPayments';
import { FlutterwaveService } from './services/flutterwave.service';
import { PaystackService } from './services/paystack.service';
import { CryptoService } from './services/crypto.service';

@Injectable()
export class PaymentService implements IPayments {
  paystack: PaystackService;
  flutterwave: FlutterwaveService;
  crypto: CryptoService;
  logger: Logger;
  constructor(
    private readonly fcoins: CryptoService,
    private readonly ps: PaystackService,
    private readonly flw: FlutterwaveService,
  ) {
    this.logger = new Logger();
    this.paystack = ps;
    this.flutterwave = flw;
    this.crypto = fcoins;
  }
}


