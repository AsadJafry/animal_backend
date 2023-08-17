import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getAllUsers(){
    return this.usersService.findAll()
  }   

  @Get(':id')
  getUserByID(@Param('id',ParseIntPipe) id) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  updateUser(@Param('id',ParseIntPipe) id:number, @Body('name') name: string) {
    return this.usersService.update(+id, name);
  }

  @Delete(':id')
  deleteUser(@Param('id',ParseIntPipe) id:number   ){
    return this.usersService.remove(id);
  }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
}
