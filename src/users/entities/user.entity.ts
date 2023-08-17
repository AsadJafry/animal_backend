import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    email:string

    @Column()
    name:string

     @Column()
    lastName:string



}


