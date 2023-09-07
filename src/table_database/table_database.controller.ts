import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TableDatabaseService } from './table_database.service';
import { CreateTableDatabaseDto } from './dto/create-table_database.dto';
import { UpdateTableDatabaseDto } from './dto/update-table_database.dto';

@Controller('table-database')
export class TableDatabaseController {
  constructor(private readonly tableDatabaseService: TableDatabaseService) {}

  @Post()
  create(@Body() createTableDatabaseDto: CreateTableDatabaseDto) {
    return this.tableDatabaseService.create(createTableDatabaseDto);
  }

  @Get()
  findAll() {
    return this.tableDatabaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableDatabaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableDatabaseDto: UpdateTableDatabaseDto) {
    return this.tableDatabaseService.update(+id, updateTableDatabaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableDatabaseService.remove(+id);
  }
}
