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

  //@IsNotEmpty()
  @IsEnum(PackageType)
  packageType: PackageType;

  @IsOptional() 
  addressLine1: string;
 // @IsOptional() 
  // image: string;

  // @IsNotEmpty()
  // country: string;

  // @IsOptional() 
  // state: string;

  // @IsOptional() /
  // city: string;

  // @IsOptional()
  // latlong: string;


  // @IsOptional() 
  // isVerified: boolean;

  // @IsNotEmpty()
  // @IsDateString()
  // createdOnDate: Date;

  // @IsOptional() 
  // updatedOnDate: Date;

  // @IsOptional()
  // isBiometricTnCAccepted: boolean;

  // @IsNotEmpty()
  // @IsEnum(IdentificationType)
  // userIdentificationType: IdentificationType;
}