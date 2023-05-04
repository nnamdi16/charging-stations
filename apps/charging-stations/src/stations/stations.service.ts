import { Injectable } from '@nestjs/common';
import { CreateStationInput } from './dto/create-station.input';
import { UpdateStationInput } from './dto/update-station.input';

@Injectable()
export class StationsService {
  create(createStationInput: CreateStationInput) {
    return 'This action adds a new station';
  }

  findAll() {
    return `This action returns all stations`;
  }

  findOne(id: string) {
    return `This action returns a #${id} station`;
  }

  update(id: number, updateStationInput: UpdateStationInput) {
    return `This action updates a #${id} station`;
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
