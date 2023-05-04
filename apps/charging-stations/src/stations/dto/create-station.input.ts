import { InputType, Field } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { StatusType } from '../entities/models/statusType.model';
import { GraphQLJSONObject } from 'graphql-type-json';
import { OperatorInfo } from '../entities/models/operatorInfo.model';
import { AddressInfo } from '../entities/models/addressInfo.model';
import { Connections } from '../entities/models/connections.model';

@InputType()
export class CreateStationInput {
  @Field()
  @Exclude()
  _id: string;

  @Field((type) => GraphQLJSONObject)
  operatorInfo: OperatorInfo;

  @Field((type) => GraphQLJSONObject)
  statusType: StatusType;

  @Field((type) => GraphQLJSONObject)
  addressInfo: AddressInfo;

  @Field((type) => [GraphQLJSONObject])
  connections: [Connections];
}
