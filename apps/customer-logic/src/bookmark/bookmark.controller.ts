import { Controller, Get, Post, Body, Delete, Logger } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { IBookmark } from './IBookmark';
import BMResponse from '@app/boardman-commons/IResponse';
import { ApiTags } from '@nestjs/swagger';

@Controller('bookmark')
@ApiTags('Bookmark 🔖')
export class BookmarkController implements IBookmark {
  constructor(private readonly bookmarkService: BookmarkService) {}
  logger: Logger;
  @Post('FindByUserProfileId')
  FindByUserProfileId(@Body() data: Map<string, any>): BMResponse {
    return this.bookmarkService.FindByUserProfileId(data);
  }
  @Post('Removeitem')
  Removeitem(@Body() data: Map<string, any>): BMResponse {
    return this.bookmarkService.Removeitem(data);
  }
  @Post('Getitems')
  Getitems(@Body() data: Map<string, any>): BMResponse {
    return this.bookmarkService.Getitems(data);
  }
  @Post('Additem')
  Additem(@Body() data: Map<string, any>): BMResponse {
    return this.bookmarkService.Additem(data);
  }
  @Post('FindById')
  FindById(@Body() data: Map<string, any>): BMResponse {
    return this.bookmarkService.FindById(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.bookmarkService.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Body() data: Map<string, any>): BMResponse {
    return this.bookmarkService.FindByupdatedAt(data);
  }
}
