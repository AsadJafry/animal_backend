import { Injectable, NotFoundException } from '@nestjs/common';
import { addBreedDto } from './dto/addbreed.dto';
import { Repository } from 'typeorm';
import { Breed } from './entities/breed.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalType } from 'src/animal-type/entities/animal-Type.entity';

@Injectable()
export class BreedService {

    constructor(
        @InjectRepository(Breed) private breedRepository:Repository<Breed>,
        @InjectRepository(AnimalType) private typeRepo: Repository<AnimalType>
        ){}
   
    async createBreed(addBreedDto:addBreedDto):Promise<Breed>{
        let {name,animalType}=addBreedDto;
        const breed= new Breed;
        breed.name=name;
        name=animalType;
        const type=await this.typeRepo.findOneBy({name})
        if(!type){
            throw new NotFoundException("type doesnt exist for this breed")
        }
        breed.animalType=type;
       return await this.breedRepository.save(breed)
    } 
    async getBreeds():Promise<Breed[]>{
        return await this.breedRepository.find()
    }
    async getbread(animalType){
        return await this.breedRepository.findOneBy({animalType})
    }
}
