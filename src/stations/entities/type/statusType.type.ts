import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class StatusType {
  @Field((type) => ID)
  @Prop()
  id: number;

  @Field()
  @Prop()
  isOperational: boolean;

  @Field()
  @Prop()
  isUserSelectable: boolean;

  @Field()
  @Prop()
  title: string;
}
