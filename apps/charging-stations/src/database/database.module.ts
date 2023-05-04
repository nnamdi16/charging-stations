import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { ENV } from '../common/constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGO_USERNAME: Joi.string().required(),
        MONGO_PASSWORD: Joi.string().required(),
        MONGO_DATABASE: Joi.string().required(),
        MONGO_HOST: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const username = configService.get(ENV.MONGO_USERNAME);
        const password = configService.get(ENV.MONGO_PASSWORD);
        const database = configService.get(ENV.MONGO_DATABASE);
        const host = configService.get(ENV.MONGO_HOST);

        return {
          uri: `mongodb+srv://${username}:${password}@${host}/?authMechanism=DEFAULT`,
          dbName: database,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
