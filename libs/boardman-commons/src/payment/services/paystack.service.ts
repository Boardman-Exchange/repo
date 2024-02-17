import { Injectable } from '@nestjs/common';
import { Paystack } from 'paystack-sdk';
@Injectable()
export class PaystackService extends Paystack {
  /**
   *
   */
  constructor() {
    super(process.env.PAYSTACK_KEY);
  }
}
