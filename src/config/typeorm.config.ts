import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const typeOrmConfig:TypeOrmModuleOptions={

    type:'postgres',
    //host:'localhost',
    host:'localhost',
    port:5432,
    //username:'admin',
    username:'postgres',
    //password:'12345678',
    password:'password',
    database:'animalapp',
    entities:[__dirname + '/../**/*.entity{.ts,.js}'], 
    synchronize:true,





}