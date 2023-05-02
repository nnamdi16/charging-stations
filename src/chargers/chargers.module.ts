import { Module } from '@nestjs/common';
import { ChargersService } from './chargers.service';
import { ChargersController } from './chargers.controller';

@Module({
  controllers: [ChargersController],
  providers: [ChargersService]
})
export class ChargersModule {}
