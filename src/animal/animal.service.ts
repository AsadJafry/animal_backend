import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnimalService {
    constructor (@InjectRepository(Animal) private animalRepository:Repository<Animal>){}

    async getAllAnimals():Promise<Animal[]>{
        return await this.animalRepository.find()
        
    }
    addnewAnimal(){
        return 'animal'
    }




}
