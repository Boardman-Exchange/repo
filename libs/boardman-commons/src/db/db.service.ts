import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from 'prisma/prisma-client';
import ICommons from '../ICommons';

@Injectable()
export class DbService extends PrismaClient implements ICommons {
  logger: Logger;
  constructor() {
    super({
      datasourceUrl: process.env.DATABASE_URL ?? 'db_url',
      errorFormat: 'pretty',
    });
    
    this.logger = new Logger(DbService.name);
  }
}
