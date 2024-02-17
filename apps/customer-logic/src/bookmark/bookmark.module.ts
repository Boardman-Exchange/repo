import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { DbService } from '@app/boardman-commons/db/db.service';

@Module({
  controllers: [BookmarkController],
  providers: [BookmarkService,DbService]
})
export class BookmarkModule {}
