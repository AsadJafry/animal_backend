import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { addDetailsDto } from './dto/addUserDetails.dto';
import * as bcrypt from 'bcrypt'
import { IdentificationType } from 'src/enums/identification-type.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  private async hashPass(salt:string,password:string):Promise<string>{
    return await bcrypt.hash(password,salt) 
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, mobile } = createUserDto;

    const user = new User();
    user.email = email;
    user.salt=await bcrypt.genSalt()
    console.log('salt ',user.salt)
    user.password = await this.hashPass(user.salt,password);
    user.mobile = mobile;
    user.createdOnDate=new Date()
    try{
    await this.userRepository.save(user);
    }catch (error){
      console.log(error)
      if (error.code==='23505'){
        throw new ConflictException( "user already exists with this email");
      }
      else throw new NotFoundException
    }
    return user;
  }
  async adduserDetails(userID, addDetailsDto: addDetailsDto) {
    const {
      name,
      userType,
      userRole,
      packageType,
      userIdentificationType,
      country,
      state,
      city,
      addressLine1,
    } = addDetailsDto;
    const user = await await this.getById(userID);
    if (!user) {
      throw new NotFoundException('usernot found');
    }
  
    user.name = name;
    if (userType) user.userType = userType;
    if (userRole) user.userRole = userRole;
    if (packageType) user.packageType = packageType;
    if (userIdentificationType)
      user.userIdentificationType = userIdentificationType;
    if (country) user.country = country;
    if (city) user.city = city;
    if (state) user.state = state;
    if (addressLine1) user.addressLine1 = addressLine1;


    user.updatedOnDate=new Date()
    await this.userRepository.save(user);
    return user;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async getById(userId): Promise<User> {
    console.log(userId);
    const found = await this.userRepository.findOneBy({userId});
    if (!found) {
      throw new NotFoundException('');
    }
    return found;
  }

  async update(id: number, name: string) {
    const user = await this.getById(id);
    user.name = name;
    await user.save();
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  
}
