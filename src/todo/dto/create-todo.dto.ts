import { IsInt, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly id: number;

}