import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, raw } from '@nestjs/mongoose';
import { Country } from './country.model';

@ObjectType()
export class AddressInfo {
  @Field((type) => ID)
  @Prop()
  id: number;

  @Field()
  @Prop()
  title: string;

  @Field()
  @Prop()
  addressLine1: string;

  @Field()
  @Prop()
  addressLine2: string;

  @Field()
  @Prop()
  town: string;

  @Field()
  @Prop()
  stateOrProvince: string;

  @Field()
  @Prop()
  postcode: string;

  @Field(() => Int)
  @Prop()
  countryID: number;

  @Field((type) => Country)
  @Prop(raw({ type: Country, required: true }))
  country: Country;

  @Field(() => Int)
  @Prop()
  latitude: number;

  @Field(() => Int)
  @Prop()
  logitude: number;

  @Field(() => Int)
  @Prop()
  contactTelephone1: number;

  @Field()
  @Prop()
  contactTelephone2: string;

  @Field()
  @Prop()
  contactEmail: string;

  @Field()
  @Prop()
  addressComments: string;

  @Field()
  @Prop()
  relatedURL: string;

  @Field(() => Int)
  @Prop()
  distance: number;

  @Field(() => Int)
  @Prop()
  distanceUnit: number;
}
