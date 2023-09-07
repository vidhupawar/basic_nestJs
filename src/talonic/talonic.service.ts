import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTalonicDto } from './dto/create-talonic.dto';
import { UpdateTalonicDto } from './dto/update-talonic.dto';
import { Talonic } from './entities/talonic.entity';

@Injectable()
export class TalonicService {
  constructor(
    @InjectModel('Talonic') private readonly talonicModel: Model<Talonic>,
  ){}
  
  async create(createTalonicDto: CreateTalonicDto) {
    const _table = await this.talonicModel.insertMany(createTalonicDto);
    return 'This action adds a new talonic';
  }

  async findAll() {
    const tableData = await this.talonicModel.find().exec();
    return tableData;
  }

  async findOne(id: string) {
    const tableData = await this.talonicModel.findOne({table_id: id}).exec();
    return tableData;
  }

  async update(id: number, updateTalonicDto: UpdateTalonicDto) {
    const tableData = await this.talonicModel.findOne({table_id: id}, {updateTalonicDto}).exec();
    return tableData;
  }

  async remove(id: number) {
    const tableData = await this.talonicModel.deleteOne({table_id: id}).exec();
    return tableData;
  }
}
