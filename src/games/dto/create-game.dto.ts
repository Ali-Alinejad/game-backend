import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SystemRequirementsDto } from './system-requirements.dto';
import { SystemDescriptionsDto } from './description.dto';


export class CreateGameDto {
  @ApiProperty({ description: 'The title of the game.' })
  title: string;

  @ApiProperty({ description: 'The price of the game on the market.' })
  market_Price: number;

  @ApiProperty({ description: 'Whether the game has a discount.' })
  has_Discount: boolean;

  @ApiProperty({ description: 'The release date of the game.' })
  release_Date: Date;

  @ApiProperty({ description: 'The beta release date of the game.', required: false })
  betaDate?: Date;

  @ApiProperty({ description: 'URL for the game cover image.' })
  image: string;

  @ApiProperty({ description: 'The company that developed the game.' })
  developer: string;

  @ApiProperty({ description: 'The platform(s) on which the game is available.' })
  platform: string[];

  // Additional fields you had
  @ApiProperty({ description: 'The game\'s genres.' })
  genres: string[];

  @ApiProperty({ description: 'The game\'s tags.' })
  tags: string[];

  @ApiProperty({ description: 'URL for the game trailer.' })
  trailer_Url: string;

  @ApiProperty({ description: 'List of supported languages.' })
  supported_Languages: string[];

  @ApiProperty({ type: SystemRequirementsDto })
  minimum_System_Requirements: SystemRequirementsDto;

  @ApiPropertyOptional({ type: SystemRequirementsDto })
  recommended_System_Requirements?: SystemRequirementsDto;

  @ApiProperty({ type: SystemDescriptionsDto })
  description: SystemDescriptionsDto;
}