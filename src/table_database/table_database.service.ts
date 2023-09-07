import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTableDatabaseDto } from './dto/create-table_database.dto';
import { UpdateTableDatabaseDto } from './dto/update-table_database.dto';
import { TableDatabase } from './entities/table_database.entity';

@Injectable()
export class TableDatabaseService {
  constructor(
    @InjectModel('table_databases') private readonly tDBModel: Model<TableDatabase>,
  ){}

  create(createTableDatabaseDto: CreateTableDatabaseDto) {
    return this.tDBModel.create(createTableDatabaseDto);
  }

  async findAll() {
    const tableData = await this.tDBModel.find().exec();
    return tableData;
  }

  async findOne(id: number) {
    const tableData = await this.tDBModel.findOne({table_id: id}).exec();
    return tableData;
  }

  async update(id: number, updateTableDatabaseDto: UpdateTableDatabaseDto) {
    const tableData = await this.tDBModel.updateOne({table_id: id}, updateTableDatabaseDto).exec();
    return tableData;
  }

  async remove(id: number) {
    const tableData = await this.tDBModel.deleteOne({table_id: id}).exec();
    return tableData
  }
}
