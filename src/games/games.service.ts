// src/games/games.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from './schemas/game.schema';
import { CreateGameDto } from './dto/create-game.dto'; // Import your DTO

@Injectable()
export class GamesService {
  constructor(@InjectModel(Game.name) private gameModel: Model<Game>) {}

  async findAll(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }

  // Add the implementation to create and save a new game
  async create(createGameDto: CreateGameDto): Promise<Game> {
    const createdGame = new this.gameModel(createGameDto);
    return createdGame.save();
  }
}