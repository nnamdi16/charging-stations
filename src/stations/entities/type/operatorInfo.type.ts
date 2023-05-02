import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, raw } from '@nestjs/mongoose';
import { AddressInfo } from './addressInfo.type';

@ObjectType()
export class OperatorInfo {
  @Field((type) => ID)
  @Prop()
  id: number;

  @Field()
  @Prop()
  websiteURL: string;

  @Field()
  @Prop()
  comments: string;

  @Field()
  @Prop()
  title: string;

  @Field()
  @Prop()
  phonePrimaryContact: string;

  @Field()
  @Prop()
  phoneSecondaryContact: string;

  @Field()
  @Prop()
  isPrivateIndividual: boolean;

  @Field((type) => AddressInfo)
  @Prop(raw({ type: AddressInfo, required: true }))
  addressInfo: string;

  @Field()
  @Prop()
  bookingURL: string;

  @Field()
  @Prop()
  contactEmail: string;

  @Field()
  @Prop()
  faultReportEmail: string;

  @Field()
  @Prop()
  isRestrictedEdit: boolean;
}
