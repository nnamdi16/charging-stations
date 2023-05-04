import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class ConnectionType {
  @Field((type) => ID)
  @Prop()
  id: number;

  @Field()
  @Prop()
  formalName: string;

  @Field()
  @Prop()
  isDiscontinued: boolean;

  @Field()
  @Prop()
  isObsolete: boolean;

  @Field()
  @Prop()
  title: string;
}

export type connectionType = {
  id: number;
  formalName: string;
  isDiscontinued: boolean;
  isObsolete: boolean;
  title: string;
};
