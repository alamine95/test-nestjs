import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auths')
export class AuthController {
    constructor(
        private authService: AuthService,
    ){}

    @Post('login')
    signIn(@Body() loginDto: LoginDto, @Res() res) {
        return this.authService.signIn(loginDto.email, loginDto.password, res);
    }
}
