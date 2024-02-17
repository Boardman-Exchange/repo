import { Module } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';

@Module({
  providers: [QrCodeService]
})
export class QrModule {}
