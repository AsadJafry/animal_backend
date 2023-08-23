import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AnimalModule } from './animal/animal.module';
 
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
