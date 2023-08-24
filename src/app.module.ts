import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AnimalModule } from './animal/animal.module';
import { BreedModule } from './breed/breed.module';
import { AnimalTypeModule } from './animal-type/animal-type.module';
 
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    AnimalModule,
    BreedModule,
    AnimalTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
