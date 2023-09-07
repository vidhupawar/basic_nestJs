import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDatabaseDto } from './create-table_database.dto';

export class UpdateTableDatabaseDto extends PartialType(CreateTableDatabaseDto) {}
