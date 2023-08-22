import { Injectable,ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

@Injectable()
export class MobileValidationPipe implements PipeTransform{
    transform(value: any) {
        const phoneNumberPattern = /^(?:\+\d{1,3})?[0-9]{10}$/;
    
        if (!phoneNumberPattern.test(value.mobile)) {
          throw new BadRequestException('Invalid phone number');
        }
        return value;
    }
}