import { NestFactory } from '@nestjs/core';
import { AgentLogicModule } from './agent-logic.module';
import * as RedocExpress from 'redoc-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AgentLogicModule);

  const config = new DocumentBuilder()
    .addServer(
      (process.env['DOMAIN_NAME'] as string) ||
        'http://localhost:' + process.env['AGENT_PORT'],
    )
    .addBearerAuth({
      type: 'apiKey',
    }) 
    .setTitle('BoardMan Agent Doc')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
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

  await app.listen(process.env['AGENT_PORT'] ?? 3000);
}
bootstrap();
