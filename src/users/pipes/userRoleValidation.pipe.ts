import { ArgumentMetadata, BadRequestException, ParseIntPipe, PipeTransform } from "@nestjs/common";
import { UserRole } from "src/enums/user-role.enum";

export class UserRoleValidPipe implements PipeTransform{
    readonly allowedRoles=[
        UserRole.Admin,
        UserRole.Manager,
        UserRole.Staff
    ]
    transform(value: any, metadata: ArgumentMetadata) {
        if(value.userRole){
            if(!this.isrolevalid(value.userRole)){
                throw new BadRequestException("role does not exist")
            }
        }
        return value;
    }
    private isrolevalid(role){
        const idx=this.allowedRoles.indexOf(role)
        return idx!==-1
    }
} 