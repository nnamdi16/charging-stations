import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class CurrentType {
  @Field((type) => ID)
  @Prop()
  id: number;

  @Field()
  @Prop()
  description: string;

  @Field()
  @Prop()
  title: string;
}
