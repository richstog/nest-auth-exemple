import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @IsString({ message: 'Must be a string'})
    @IsEmail({}, {message: 'Incorrent email'})
    readonly email: string;

    @IsString({ message: 'Must be a string'})
    @Length(4, 16, {message: 'min 4 max 16'})
    readonly password: string;
}