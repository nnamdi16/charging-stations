import { Module } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { StationsModule } from './stations.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    StationsModule,
  ],
  controllers: [],
  providers: [IntegrationService],
})
export class IntegrationModule {}
