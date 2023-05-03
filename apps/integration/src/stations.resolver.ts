import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StationsService } from './stations.service';
import { Station } from './entities/station.entity';
import { CreateStationInput } from './dto/create-station.input';
import { UpdateStationInput } from './dto/update-station.input';

@Resolver(() => Station)
export class StationsResolver {
  constructor(private readonly stationsService: StationsService) {}

  @Mutation(() => Station)
  createStation(@Args('createStationInput') createStationInput: CreateStationInput) {
    return this.stationsService.create(createStationInput);
  }

  @Query(() => [Station], { name: 'stations' })
  findAll() {
    return this.stationsService.findAll();
  }

  @Query(() => Station, { name: 'station' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stationsService.findOne(id);
  }

  @Mutation(() => Station)
  updateStation(@Args('updateStationInput') updateStationInput: UpdateStationInput) {
    return this.stationsService.update(updateStationInput.id, updateStationInput);
  }

  @Mutation(() => Station)
  removeStation(@Args('id', { type: () => Int }) id: number) {
    return this.stationsService.remove(id);
  }
}
