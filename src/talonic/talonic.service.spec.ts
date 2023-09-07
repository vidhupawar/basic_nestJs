import { Test, TestingModule } from '@nestjs/testing';
import { TalonicService } from './talonic.service';

describe('TalonicService', () => {
  let service: TalonicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TalonicService],
    }).compile();

    service = module.get<TalonicService>(TalonicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
