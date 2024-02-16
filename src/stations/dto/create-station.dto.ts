import { IsIP, IsInt, IsNotEmpty, IsString, Max, Min, } from "class-validator";

export class CreateStationDto {
  @IsNotEmpty()
  @IsString()
  location:string;

  @IsString()
  @IsIP("4")
  ipAddress:string;

  @IsInt()
  @Min(0)
  batteryCapacity:number;

  @IsInt()
  @Min(0)
  @Max(100)
  batteryCharge:number;
}
