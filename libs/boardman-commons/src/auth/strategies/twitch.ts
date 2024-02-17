import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-twitch';

// TODO impliment twitch strategy
@Injectable()
export class Twitch extends PassportStrategy(Strategy, 'twitch') {
  constructor() {
    super({
      clientID: process.env.TWITCH_CLIENT_ID || 'YOUR_TWITCH_CLIENT_ID',
      clientSecret:
        process.env.TWITCH_CLIENT_SECRET ?? 'YOUR_TWITCH_CLIENT_SECRET',
      callbackURL: process.env.TWITCH_CALLBACK_URL ?? 'YOUR_CALLBACK_URL',
      scope: 'user:read:email', // Add any required scopes
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    // Custom validation logic, e.g., save user to database
    return profile;
  }
}
