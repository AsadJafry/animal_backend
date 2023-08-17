import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const typeOrmConfig:TypeOrmModuleOptions={

    type:'postgres',
    host:'localhost',
    port:5432,
    username:'admin',
    password:'12345678',
    database:'animalapp',
    entities:[__dirname + '/../**/*.entity{.ts,.js}'], 
    synchronize:true,





}