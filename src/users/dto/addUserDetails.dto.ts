import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { IdentificationType } from "src/enums/identification-type.enum";
import { PackageType } from "src/enums/package-type.enum";
import { UserRole } from "src/enums/user-role.enum";
import { UserType } from "src/enums/user-type.enum";

export class addDetailsDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(UserType)
  userType: UserType;

  // @IsNotEmpty()
  @IsEnum(UserRole)
  userRole: UserRole;

  @IsOptional()
  @IsEnum(PackageType)
  packageType: PackageType;

  @IsOptional()
  @IsEnum(IdentificationType)
  userIdentificationType: IdentificationType;
  
    
  @IsOptional()
  country: string;

  @IsOptional() 
  state: string;

  @IsOptional() 
  city: string;

  @IsOptional() 
  addressLine1: string;
   
  
  
  // @IsOptional() 
  // image: string;

  
  // @IsOptional()
  // latlong: string;


  // @IsOptional() 
  // isVerified: boolean;

  
  // @IsOptional()
  // isBiometricTnCAccepted: boolean;

  
}