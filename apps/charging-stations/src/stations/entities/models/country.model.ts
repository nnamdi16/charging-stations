import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Country {
  @Field((type) => ID)
  @Prop()
  id: number;

  @Field()
  @Prop()
  isoCode: string;

  @Field()
  @Prop()
  continentCode: string;

  @Field()
  @Prop()
  title: string;
}
