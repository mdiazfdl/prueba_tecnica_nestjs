import { Type } from "class-transformer";
import { IsDateString,IsDate } from "class-validator";

export class FilterDateDto {

    @IsDate()
    @Type(() => Date)
    fechaInicio: Date;
    
    @IsDate()
    @Type(() => Date)
    fechaFin: Date;

}