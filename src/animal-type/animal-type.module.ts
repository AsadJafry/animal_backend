import { Module } from '@nestjs/common';
import { AnimalTypeController } from './animal-type.controller';
import { AnimalTypeService } from './animal-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalType } from './entities/animal-Type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AnimalType])],
  controllers: [AnimalTypeController],
  providers: [AnimalTypeService]
})
export class AnimalTypeModule {}
