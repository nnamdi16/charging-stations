import { Test, TestingModule } from '@nestjs/testing';
import { ChargersService } from './chargers.service';

describe('ChargersService', () => {
  let service: ChargersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargersService],
    }).compile();

    service = module.get<ChargersService>(ChargersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
