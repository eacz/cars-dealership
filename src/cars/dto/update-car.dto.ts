import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsUUID()
  @IsOptional()
  readonly id?: string;
}
