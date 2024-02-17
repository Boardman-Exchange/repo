import { PartialType } from '@nestjs/mapped-types';
import { CreatePickupDto } from './create-pickup.dto';

export class UpdatePickupDto extends PartialType(CreatePickupDto) {}
