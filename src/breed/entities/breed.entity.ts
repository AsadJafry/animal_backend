import { AnimalType } from 'src/animal-type/entities/animal-Type.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
//import { AnimalType } from './animal-type.entity';

@Entity()
export class Breed extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => AnimalType, animalType => animalType.breeds)
  @JoinTable()
  animalType: AnimalType;
}