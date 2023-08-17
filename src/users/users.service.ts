import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto):Promise<User> {
    const {email,name}=createUserDto;
    const user=new User();
    user.email=email;
    user.name=name;
    await user.save()
    return user
  }

  async findAll() {
   return await this.userRepository.find()
  }

  async findOne(id):Promise<User> {
    const found= await this.userRepository.findOneBy(id)
    if (!found){
      throw new NotFoundException('')
    }
    return found 
  }

  

  async update(id: number, name:string) {
    const user=await this.findOne(id);
    user.name=name
    await user.save()
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.userRepository.delete(id)
    
  }
}
