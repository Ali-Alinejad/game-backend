// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS رو فعال کنید
  app.enableCors(); 

  // پیکربندی Swagger
  const config = new DocumentBuilder()
    .setTitle('Games API')
    .setDescription('The API for managing game data')
    .setVersion('1.0')
    .addTag('games')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // راه‌اندازی Swagger UI در مسیر /api
  SwaggerModule.setup('api', app, document);

  await app.listen(8585);
}
bootstrap();