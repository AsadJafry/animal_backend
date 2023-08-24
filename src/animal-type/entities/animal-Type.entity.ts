import { Breed } from "src/breed/entities/breed.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AnimalType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

   @OneToMany(() => Breed, breed => breed.animalType)
   breeds: Breed[];
}