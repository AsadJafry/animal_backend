import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { UserType } from "src/enums/user-type.enum";
import { PipelineTransform } from "stream";

export class UserTypeValidationPipe implements PipeTransform{
    readonly allowedTypes=[
        UserType.Business,
        UserType.Individual
    ]
    transform(value: any) {
        console.log(value)
        
       if (value.userType){
       if (!this.isTypeValid(value.userType)) {
        throw new BadRequestException("invalid user type")
       }}
       return value
    }
    private isTypeValid(type:any){
        const idx=this.allowedTypes.indexOf(type)
        console.log('idx',idx)
        return idx !== -1
    }
} 