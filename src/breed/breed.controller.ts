import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { BreedService } from './breed.service';
import { addBreedDto } from './dto/addbreed.dto';
import { get } from 'http';

@Controller('breed')
export class BreedController {
    constructor(private breedService:BreedService){}

    @Post()
    createBreed(@Body(ValidationPipe) addBreedDto:addBreedDto){
        return this.breedService.createBreed(addBreedDto);
    }
    @Get()
    getBreed(){
        return this.breedService.getBreeds()
    }
    @Get('1')
    getspecBreed(@Body('animalType')type){
        console.log("inc ")
        return this.breedService.getbread(type)
    }
}
