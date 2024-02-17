import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [ContactController],
  providers: [ContactService, DbService],
})
export class ContactModule {}
