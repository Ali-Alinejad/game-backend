import { ApiProperty } from '@nestjs/swagger';

export class SystemDescriptionsDto {
  @ApiProperty()
  short: string;

  @ApiProperty()
  persian: string;

  @ApiProperty()
  english: string;
}