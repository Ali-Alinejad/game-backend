import { ApiProperty } from '@nestjs/swagger';

export class SystemRequirementsDto {
  @ApiProperty({ description: 'The required operating system.' })
  os: string;

  @ApiProperty({ description: 'The required processor.' })
  processor: string;

  @ApiProperty({ description: 'The required graphics card.' })
  graphicsCard: string;

  @ApiProperty({ description: 'The required RAM.' })
  ram: string;

  @ApiProperty({ description: 'The required storage space.' })
  storage: string;
}