import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { addDetailsDto } from './dto/addUserDetails.dto';
import { MobileValidationPipe } from './pipes/mobile-validation.pipe';
import { UserTypeValidationPipe } from './pipes/userTypeValidation.pipe';
import { UserRoleValidPipe } from './pipes/userRoleValidation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body(MobileValidationPipe) createUserDto: CreateUserDto
  ) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id/details')
  addUserDetails(
    @Param('id', ParseIntPipe) id: number,
    @Body(UserTypeValidationPipe,UserRoleValidPipe) addDetailsDto: addDetailsDto,
  ) {
    return this.usersService.adduserDetails(id, addDetailsDto);
  }

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserByID(@Param('id', ParseIntPipe) id) {
    return this.usersService.getById(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body('name') name: string,
  ) {
    return this.usersService.update(+id, name);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
