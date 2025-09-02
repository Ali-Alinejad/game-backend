import { ApiProperty } from '@nestjs/swagger';

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
    @ApiProperty({ description: 'The company that developed the game.' })
  platform: string;
}