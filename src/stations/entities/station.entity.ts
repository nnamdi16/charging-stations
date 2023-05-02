import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
import { OperatorInfo } from './type/operatorInfo.type';
import { StatusType } from './type/statusType.type';
import { AddressInfo } from './type/addressInfo.type';
import { Connections } from './type/connections.type';
import { Types, Document } from 'mongoose';

@ObjectType()
@Schema({
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  id: false,
})
export class Station {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Exclude()
  @Prop({ type: String, default: () => uuidv4() })
  _id: string;

  @Field((type) => OperatorInfo)
  @Prop(raw({ type: OperatorInfo, required: true }))
  operatorInfo: OperatorInfo;

  @Field((type) => StatusType)
  @Prop(raw({ type: StatusType, required: true }))
  statusType: StatusType;

  @Field((type) => AddressInfo)
  @Prop(raw({ type: AddressInfo, required: true }))
  addressInfo: AddressInfo;

  @Field((type) => [Connections])
  @Prop(raw({ type: Connections, required: true }))
  connections: Connections[];
}

export type StationDocument = Station & Document<Types.ObjectId>;

export const WalletSchema = SchemaFactory.createForClass(Station);
