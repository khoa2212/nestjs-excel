import { IsNotEmpty, Length } from 'class-validator';

export class CreateExcelDto {

    @IsNotEmpty({ message: 'link is not empty' })
    //@Length(3, 255)
    link: string;
}
