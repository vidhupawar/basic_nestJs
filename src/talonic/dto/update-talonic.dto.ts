import { PartialType } from '@nestjs/mapped-types';
import { CreateTalonicDto } from './create-talonic.dto';

export class UpdateTalonicDto extends PartialType(CreateTalonicDto) {}
