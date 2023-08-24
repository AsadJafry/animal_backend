import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnimalTypeService } from './animal-type.service';

@Controller('animal-type')
export class AnimalTypeController {
    constructor(private readonly typeService:AnimalTypeService){}

    @Get()
    getTypes(){
        return this.typeService.getTypes()
    }
    @Post()
    addNewType(@Body('typeName') name:string){
        return this.typeService.addnewtype(name);
    }
}
