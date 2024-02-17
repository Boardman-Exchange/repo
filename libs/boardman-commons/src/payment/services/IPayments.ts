import ICommons from '../../ICommons';
import { CryptoService } from './crypto.service';
import { FlutterwaveService } from './flutterwave.service';
import { PaystackService } from './paystack.service';

export interface IPayments extends ICommons {
  flutterwave: FlutterwaveService;
  paystack: PaystackService;
  crypto: CryptoService;
}
