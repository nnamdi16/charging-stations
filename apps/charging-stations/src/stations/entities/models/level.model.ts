import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Level {
  @Field((type) => ID)
  @Prop()
  id: number;

  @Field()
  @Prop()
  comments: string;

  @Field()
  @Prop()
  isFastChargeCapable: boolean;

  @Field()
  @Prop()
  title: string;
}
