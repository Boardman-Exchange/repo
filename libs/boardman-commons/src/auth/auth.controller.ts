import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import BMResponse from '../IResponse';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './services/auth.service';
import { DiscordGuard } from './gaurds/discord.guard';
import { TwitchGuard } from './gaurds/twitch.guard';

@Controller('auth')
@ApiTags('Auth 🔐')
export class AuthController {
  /**
   *
   */
  constructor(private readonly auth: AuthService) {}
  @Post('SignUpWithEmail')
  SignUpWithEmail(@Body() data: Map<string, any>) {
    return this.auth.SignUpWithEmail(data);
  }
  @UseGuards(TwitchGuard)
  @Post('SignUpWithTwitch')
  SignUpWithTwitch(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.auth.SignUpWithTwitch(data);
  }
  @UseGuards(DiscordGuard)
  @Post('SignUpWithDiscord')
  SignUpWithDiscord(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.auth.SignUpWithDiscord(data);
  }
  @Post('SignInWithEmail')
  SignInWithEmail(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.auth.SignInWithEmail(data);
  }
  @UseGuards(TwitchGuard)
  @Post('SignInWithTwitch')
  SignInWithTwitch(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.auth.SignInWithTwitch(data);
  }
  @UseGuards(DiscordGuard)
  @Post('SignInWithDiscord')
  SignInWithDiscord(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.auth.SignInWithDiscord(data);
  }
  @Post('ResetPassword')
  ResetPassword(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.auth.ResetPassword(data);
  }
  @Post('SignOut')
  SignOut(@Body() data: Map<string, any>): Promise<BMResponse> {
    return this.auth.SignOut(data);
  }
}
