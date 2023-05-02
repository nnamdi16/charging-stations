import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChargersService } from './chargers.service';
import { CreateChargerDto } from './dto/create-charger.dto';
import { UpdateChargerDto } from './dto/update-charger.dto';

@Controller('chargers')
export class ChargersController {
  constructor(private readonly chargersService: ChargersService) {}

  @Post()
  create(@Body() createChargerDto: CreateChargerDto) {
    return this.chargersService.create(createChargerDto);
  }

  @Get()
  async findAll() {
    return await this.chargersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chargersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChargerDto: UpdateChargerDto) {
    return this.chargersService.update(+id, updateChargerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chargersService.remove(+id);
  }
}
