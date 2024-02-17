import { NestFactory } from '@nestjs/core';
import { CustomerLogicModule } from './customer-logic.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as RedocExpress from 'redoc-express';

async function bootstrap() {
  const app = await NestFactory.create(CustomerLogicModule);
  const config = new DocumentBuilder()
    .setTitle('BoardMan User Docs')
    .addServer(
      (process.env['DOMAIN_NAME'] as string) ||
        'http://localhost:' + process.env['CUSTOMER_PORT'],
    )
    .addBearerAuth({
      type: 'apiKey',
    })
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Redoc configuration
  const redocOptions = {
    routePrefix: '/docs',
    specUrl: '/api-json',
  };

  app.use(
    '/docs',
    RedocExpress.default({
      specUrl: '/api-json',
      title: 'BaordMan Docs',
      redocOptions: redocOptions,
    }),
  );

  await app.listen(process.env['CUSTOMER_PORT'] ?? 3000);
}
bootstrap();
