import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaystackService } from './services/paystack.service';
import { FlutterwaveService } from './services/flutterwave.service';

@Module({
  providers: [PaymentService, PaystackService, FlutterwaveService],
})
export class PaymentModule {}
