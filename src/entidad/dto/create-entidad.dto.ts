import { Min, IsNumber } from "class-validator";

export class CreateEntidadDto {
    name: string;

    @IsNumber()
    @Min(0)
    age: number;

    active: boolean;
}
