import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from "class-validator"
import { IdentificationType } from "src/enums/identification-type.enum";
import { PackageType } from "src/enums/package-type.enum";
import { UserRole } from "src/enums/user-role.enum";
import { UserType } from "src/enums/user-type.enum";
import { MobileValidationPipe } from "../pipes/mobile-validation.pipe";
export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @MinLength(2)
  password: string;

  @IsNotEmpty()
  mobile: string;
}

