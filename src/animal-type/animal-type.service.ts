import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AnimalType } from './entities/animal-Type.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnimalTypeService {
    constructor (@InjectRepository(AnimalType)private readonly animalTypeRepo:Repository<AnimalType> ){}

    async addnewtype(tyoeName:string){
        const newType= new AnimalType;
        newType.name=tyoeName;
        return await this.animalTypeRepo.save(newType);

    }
    async getTypes():Promise<AnimalType[]>{
        return await this.animalTypeRepo.find();
    }


}
