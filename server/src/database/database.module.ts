import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseService } from './database.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        switch (configService.getOrThrow('NODE_ENV')) {
          case 'development':
            return { uri: configService.getOrThrow<string>('MONGO_DEV_CONNECTION_URI') };
          case 'demo':
            return { uri: configService.getOrThrow<string>('MONGO_DEMO_CONNECTION_URI') };
          case 'test':
            return { uri: configService.get<string>('MONGO_TEST_CONNECTION_URI') };
          default:
            throw new Error();
        }
      }
    })
  ],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
