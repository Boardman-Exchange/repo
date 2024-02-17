import { NestFactory } from '@nestjs/core';
import { ApiLogicModule } from './api-logic.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiLogicModule);

  const config = new DocumentBuilder()
    .setTitle('Developer Doc')
    .setDescription('')
    .setVersion('1.0')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
