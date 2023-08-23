import { Controller, Get, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';

@Controller('animal')
export class AnimalController {
     constructor(private readonly animalService:AnimalService){}
    @Get()
    getAllAnimals(){
        return this.animalService.getAllAnimals()
    }
    @Post()
    addAnimal(){

        return this.animalService.addnewAnimal()
    }
}
