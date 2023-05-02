import { Test, TestingModule } from '@nestjs/testing';
import { ChargersController } from './chargers.controller';
import { ChargersService } from './chargers.service';

describe('ChargersController', () => {
  let controller: ChargersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargersController],
      providers: [ChargersService],
    }).compile();

    controller = module.get<ChargersController>(ChargersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
