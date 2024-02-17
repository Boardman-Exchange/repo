import { Logger } from '@nestjs/common';
import * as TerminalAfrica from 'terminal-africa';

export class LogisticsService extends TerminalAfrica.default {
  /**
   *
   */
  static logger: Logger = new Logger(LogisticsService.name);
}
