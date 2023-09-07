import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TalonicService } from './talonic.service';
import { CreateTalonicDto } from './dto/create-talonic.dto';
import { UpdateTalonicDto } from './dto/update-talonic.dto';

@Controller('talonic')
export class TalonicController {
  constructor(private readonly talonicService: TalonicService) {}

  @Post()
  create(@Body() createTalonicDto: CreateTalonicDto) {
    return this.talonicService.create(createTalonicDto);
  }

  @Get()
  findAll() {
    return this.talonicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id)
    return this.talonicService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTalonicDto: UpdateTalonicDto) {
    return this.talonicService.update(+id, updateTalonicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talonicService.remove(+id);
  }
}
