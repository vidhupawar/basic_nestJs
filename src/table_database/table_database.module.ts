import { Module } from '@nestjs/common';
import { HttpModule} from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { TableDatabaseService } from './table_database.service';
import { TableDatabaseController } from './table_database.controller';
import { TableDatabaseSchema } from './entities/table_database.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'table_databases', schema: TableDatabaseSchema}]),
    HttpModule
  ],
  controllers: [TableDatabaseController],
  providers: [TableDatabaseService]
})
export class TableDatabaseModule {}
