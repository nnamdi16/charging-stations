import { Injectable } from '@nestjs/common';
import { CreateChargerDto } from './dto/create-charger.dto';
import { UpdateChargerDto } from './dto/update-charger.dto';
import { sendRequestToAPI } from './common/util';

@Injectable()
export class ChargersService {
  create(createChargerDto: CreateChargerDto) {
    return 'This action adds a new charger';
  }

  async findAll() {
    const data = await sendRequestToAPI(
      'https://api.openchargemap.io/v3/poi?key=ff82541f-c8d1-4507-be67-bd07e3259c4e',
      null,
      null,
    );
    console.log(data.data);
    return JSON.stringify(data.data);
  }

  findOne(id: number) {
    return `This action returns a #${id} charger`;
  }

  update(id: number, updateChargerDto: UpdateChargerDto) {
    return `This action updates a #${id} charger`;
  }

  remove(id: number) {
    return `This action removes a #${id} charger`;
  }
}
