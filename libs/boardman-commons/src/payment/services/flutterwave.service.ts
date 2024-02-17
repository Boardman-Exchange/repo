import { Injectable } from '@nestjs/common';
import * as Flutterwave from 'flutterwave-node-v3';

@Injectable()
export class FlutterwaveService extends Flutterwave {
  /**
   *
   */
  constructor() {
    super(
      process.env.FLW_PUBLIC_KEY ?? 'test',
      process.env.FLW_SECRET_KEY ?? 'test',
    );
  }
}
