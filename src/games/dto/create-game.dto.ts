// src/games/dto/create-game.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SystemRequirementsDto } from './system-requirements.dto';
import { SystemDescriptionsDto } from './description.dto';


export class CreateGameDto {
  @ApiProperty({ description: 'The title of the game.' })
  title: string;

  @ApiProperty({ description: 'The price of the game on the market.' })
  marketPrice: number;

  @ApiProperty({ description: 'Whether the game has a discount.' })
  hasDiscount: boolean;

  @ApiProperty({ description: 'The release date of the game.' })
  releaseDate: Date;

  @ApiProperty({ description: 'The beta release date of the game.', required: false })
  betaDate?: Date;

  @ApiProperty({ description: 'URL for the game cover image.' })
  image: string;

  @ApiProperty({ description: 'The company that developed the game.' })
  developer: string;

  @ApiProperty({ description: 'The platform on which the game is available.' })
  platform: string; // تغییر به رشته ساده

  // Additional fields you had
  @ApiProperty({ description: 'The game\'s genres.' })
  genres: string[];

  @ApiProperty({ description: 'The game\'s tags.' })
  tags: string[];

  @ApiProperty({ description: 'URL for the game trailer.' })
  trailerUrl: string; // تغییر نام

  @ApiProperty({ description: 'List of supported languages.' })
  supportedLanguages: string[]; // تغییر نام

  @ApiProperty({ type: SystemRequirementsDto })
  minimumSystemRequirements: SystemRequirementsDto;

  @ApiPropertyOptional({ type: SystemRequirementsDto })
  recommendedSystemRequirements?: SystemRequirementsDto;

  @ApiProperty({ type: SystemDescriptionsDto })
  description: SystemDescriptionsDto;
}