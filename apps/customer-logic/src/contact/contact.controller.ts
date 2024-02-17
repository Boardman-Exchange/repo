import { Body, Controller, Delete, Get, Logger, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { IContacts } from './IContacts';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('contact')
@ApiTags('Contacts 🫂')
export class ContactController implements IContacts {
  constructor(private readonly contactService: ContactService) {}
  logger: Logger;
  @Post('Getcontacts')
  Getcontacts(@Body() data: Map<string, any>): BMResponse {
    return this.contactService.Getcontacts(data);
  }
  @Post('Addcontact')
  Addcontact(@Body() data: Map<string, any>): BMResponse {
    return this.contactService.Addcontact(data);
  }
  @Post('Removecontact')
  Removecontact(@Body() data: Map<string, any>): BMResponse {
    return this.contactService.Removecontact(data);
  }
  @Post('FindByid')
  FindByid(@Body() data: Map<string, any>): BMResponse {
    return this.contactService.FindByid(data);
  }
  @Post('FindByuserProfileId')
  FindByuserProfileId(@Body() data: Map<string, any>): BMResponse {
    return this.contactService.FindByuserProfileId(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.contactService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.contactService.FindByupdatedAt(data);
  }
}
