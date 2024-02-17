import { PartialType } from '@nestjs/mapped-types';
import { CreateCounterOfferDto } from './create-counter-offer.dto';

export class UpdateCounterOfferDto extends PartialType(CreateCounterOfferDto) {}
