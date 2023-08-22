import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    password: string;
  
    @Column()
    salt:string;
    @Column()
    mobile: string;
    @Column({ unique: true }) 
    email: string;
  
    @Column({ nullable: true })
    userType: string;
  
   
    @Column({ nullable: true })
    userRole: string;
  
    @Column({ nullable: true })
    name: string;
  
    @Column({ nullable: true })
    image: string;
  
   
   
  
    @Column({ nullable: true })
    addressLine1: string;
  
    @Column({ nullable: true })
    country: string;
  
    @Column({ nullable: true })
    state: string;
  
    @Column({ nullable: true })
    city: string;
  
    @Column({ nullable: true })
    latlong: string;
  
    @Column({ nullable: true })
    packageType: string;
  
    @Column({ default: false })
    isVerified: boolean;
  
    @Column({ nullable: true })
    createdOnDate: Date;
  
    @Column({ nullable: true })
    updatedOnDate: Date;
  
    @Column({ default: false })
    isBiometricTnCAccepted: boolean;
  
    @Column({ nullable: true })
    userIdentificationType: string;


}


