import { AnimalBreed } from "src/enums/animal-breed.enum";
import { AnimalCategory } from "src/enums/animal-category.enum";
import { AnimalType } from "src/enums/animal-type.enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ type: 'enum', enum: AnimalCategory })
  category: AnimalCategory;

  @Column({ type: 'enum', enum: AnimalType })
  animalType: AnimalType;

  @Column({ type: 'enum', enum: AnimalBreed })
  breed: AnimalBreed; 

  @Column({ nullable: true })
  ageInMonths: number;

  @Column({ nullable: true })
  buyingPrice: number;

  @Column({ nullable: true })
  sellingPrice: number;

  @Column({ nullable: true })
  liveWeightInKgs: number;

  @Column({ nullable: true })
  milkProductionInLitres: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdOn: Date;
}