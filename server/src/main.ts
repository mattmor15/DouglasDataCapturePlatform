import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { DocsService } from './docs/docs.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.enableShutdownHooks();
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      //forbidNonWhitelisted: true,
      transform: true,
      forbidUnknownValues: false // For demo only
    })
  );

  const docsService = app.get(DocsService);
  await docsService.buildSpec(app);
  docsService.buildDocs();

  const configService = app.get(ConfigService);
  const port = configService.getOrThrow<number>('SERVER_PORT');

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

void bootstrap();
