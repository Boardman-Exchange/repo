import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-discord';

// TODO implement Discord Strategy
@Injectable()
export class Discord extends PassportStrategy(Strategy, 'discord') {
  constructor() {
    super({
      clientID: process.env.DISCORD_CLIENT_ID || 'YOUR_DISCORD_CLIENT_ID',
      clientSecret:
        process.env.DISCORD_CLIENT_SECRET ?? 'YOUR_DISCORD_CLIENT_SECRET',
      callbackURL: process.env.CALLBACK_URL ?? 'YOUR_CALLBACK_URL',
      scope: ['identify', 'email'], // Add any required scopes
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    // Custom validation logic, e.g., save user to database
    return done(null, profile);
  }
}
