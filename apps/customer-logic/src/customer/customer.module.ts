import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService,DbService]
})
export class CustomerModule {}
