import { IsNotEmpty, IsString, isNotEmpty, isString } from "class-validator";
import { AnimalType } from "src/animal-type/entities/animal-Type.entity";

export class addBreedDto{
    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsString()
    animalType:string
}