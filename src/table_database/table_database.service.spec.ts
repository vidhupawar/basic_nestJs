import { Test, TestingModule } from '@nestjs/testing';
import { TableDatabaseService } from './table_database.service';

describe('TableDatabaseService', () => {
  let service: TableDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableDatabaseService],
    }).compile();

    service = module.get<TableDatabaseService>(TableDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
