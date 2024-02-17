import { PartialType } from '@nestjs/mapped-types';
import { CreateSquareDto } from './create-square.dto';

export class UpdateSquareDto extends PartialType(CreateSquareDto) {}
