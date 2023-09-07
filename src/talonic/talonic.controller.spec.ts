import { Test, TestingModule } from '@nestjs/testing';
import { TalonicController } from './talonic.controller';
import { TalonicService } from './talonic.service';

describe('TalonicController', () => {
  let controller: TalonicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TalonicController],
      providers: [TalonicService],
    }).compile();

    controller = module.get<TalonicController>(TalonicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
