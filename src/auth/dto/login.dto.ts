import { IsEmail, IsNotEmpty, Matches } from "class-validator";

export class LoginDto {

    @IsNotEmpty()
    @IsEmail(null, {message: 'Please provide valid email'})
    email: string;

    @IsNotEmpty()
    @Matches(null, {message: 'Provide password'})
    password: string;
}
