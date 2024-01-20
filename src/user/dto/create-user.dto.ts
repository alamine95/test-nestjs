import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(2, {message: 'Name have atleast 2 characters.'})
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail(null, {message: 'Please provide valid email'})
    email: string;

    @IsNotEmpty()
    @Matches(null, {message: 'Provide password'})
    password: string;
}
