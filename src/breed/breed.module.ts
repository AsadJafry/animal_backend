import { Module } from '@nestjs/common';
import { BreedController } from './breed.controller';
import { BreedService } from './breed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';
import { AnimalType } from 'src/animal-type/entities/animal-Type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Breed,AnimalType]),],
  controllers: [BreedController],
  providers: [BreedService]
})
export class BreedModule {}
