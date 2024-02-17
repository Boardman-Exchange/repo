import ICommons from '@app/boardman-commons/ICommons';
import { Injectable, Logger } from '@nestjs/common';
import { IAuth } from './IAuth.interface';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class AuthService implements ICommons, IAuth {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger(AuthService.name, {
      timestamp: true,
    });
  }
  SignUpWithEmail(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  SignUpWithTwitch(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  SignUpWithDiscord(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  SignInWithEmail(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  SignInWithTwitch(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  SignInWithDiscord(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  ResetPassword(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
  SignOut(data: Map<string, any>): Promise<BMResponse> {
    this.logger.log(data);
    throw new Error('Method not implemented.');
  }
}
