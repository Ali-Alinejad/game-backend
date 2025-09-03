import { ApiProperty } from '@nestjs/swagger';

export class SystemDescriptionsDto {
@ApiProperty({ description: 'The required operating system.' })
  short: string;

@ApiProperty({ description: 'The required operating system.' })
  persian: string;

@ApiProperty({ description: 'The required operating system.' })
  english: string;
}
