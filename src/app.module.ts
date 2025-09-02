// src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module'; // Import GamesModule

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/games'),
    GamesModule, // Add GamesModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}