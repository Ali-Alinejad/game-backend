import { Controller, Get, Post, Body } from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from './schemas/game.schema';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
// اطمینان حاصل کنید که مسیر درست import شده است
import { CreateGameDto } from './create-game.dto'; 

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  @ApiOperation({ summary: 'Get a list of all games' })
  @ApiResponse({ status: 200, description: 'Returns an array of games.' })
  async findAll(): Promise<Game[]> {
    return this.gamesService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new game' })
  @ApiResponse({ status: 201, description: 'The game has been successfully created.' })
  async create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gamesService.create(createGameDto);
  }
}