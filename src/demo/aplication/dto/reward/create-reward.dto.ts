import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateRewardDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsNumber()
  pointRequired: number;
  @IsNumber()
  stock: number;
  @IsBoolean()
  isActive?: boolean = true;
}
