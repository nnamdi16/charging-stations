import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StationsModule } from './stations/stations.module';
import { DatabaseModule } from './database/database.module';
import { ChargersModule } from './chargers/chargers.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    StationsModule,
    DatabaseModule,
    ChargersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
