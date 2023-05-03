import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, raw } from '@nestjs/mongoose';
import { ConnectionType } from './connectionType.model';
import { StatusType } from './statusType.model';
import { Level } from './level.model';
import { CurrentType } from './currentType.model';

@ObjectType()
export class Connections {
  @Field((type) => ID)
  @Prop()
  id: number;

  @Field(() => Int)
  @Prop()
  connectionTypeId: number;

  @Field((type) => ConnectionType)
  @Prop(raw({ type: ConnectionType, required: true }))
  connectionType: ConnectionType;

  @Field()
  @Prop()
  reference: string;

  @Field(() => Int)
  @Prop()
  statusTypeId: number;

  @Field((type) => StatusType)
  @Prop(raw({ type: StatusType, required: true }))
  statusType: StatusType;

  @Field(() => Int)
  @Prop()
  levelId: number;

  @Field((type) => Level)
  @Prop(raw({ type: Level, required: true }))
  level: Level;

  @Field(() => Int)
  @Prop()
  amps: number;

  @Field(() => Int)
  @Prop()
  voltage: number;

  @Field(() => Int)
  @Prop()
  powerKW: number;

  @Field(() => Int)
  @Prop()
  currentTypeId: number;

  @Field((type) => CurrentType)
  @Prop(raw({ type: CurrentType, required: true }))
  currentType: CurrentType;

  @Field(() => Int)
  @Prop()
  quantity: number;

  @Field()
  @Prop()
  comments: string;
}
