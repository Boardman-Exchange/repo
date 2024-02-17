import { Module } from '@nestjs/common';
import { Twitch } from './strategies/twitch';
import { Discord } from './strategies/discord';
import { AuthService } from './services/auth.service';
import { ConfigModule } from '@nestjs/config';
import { DbService } from '../db/db.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [Twitch, Discord, AuthService,DbService],
  controllers: [],
})
export class AuthModule {}
