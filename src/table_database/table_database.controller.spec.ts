import { Test, TestingModule } from '@nestjs/testing';
import { TableDatabaseController } from './table_database.controller';
import { TableDatabaseService } from './table_database.service';

describe('TableDatabaseController', () => {
  let controller: TableDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableDatabaseController],
      providers: [TableDatabaseService],
    }).compile();

    controller = module.get<TableDatabaseController>(TableDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
