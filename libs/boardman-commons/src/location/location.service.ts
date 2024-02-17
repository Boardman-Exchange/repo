import { Logger } from '@nestjs/common';
import * as Radar from 'radar-sdk-js';

export class LocationService extends Radar.default {
  static logger: Logger = new Logger(LocationService.name);

  /**
   *
   */
}
