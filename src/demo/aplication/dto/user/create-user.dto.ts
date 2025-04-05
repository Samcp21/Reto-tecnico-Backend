import { IsNumber, IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  username: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsNumber()
  points?: number;
  @IsNumber()
  level?: number;
  @IsString({ each: true })
  archievements?: string[];
}
