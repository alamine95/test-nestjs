import { HttpStatus, Inject, Injectable, Scope, UnauthorizedException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { compare, hash } from 'bcrypt';
import { jwtConstants } from './auth.constants';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
        @Inject(REQUEST) private readonly request: Request,
    ){}

    async signIn(email: string, password: string, res) {
        const user = await this.usersService.findOneByLogin(email);

        if(!user){
            throw new UnauthorizedException('Email or password incorrect');
        }

        const isValid = await compare(password, user.password);

        if(!isValid){
            throw new UnauthorizedException('Email or password incorrect');
        }

        const payload = { sub: user["_id"], username: user.email };
            
        const access_token = await this.jwtService.signAsync(payload,{secret: jwtConstants.secret});
        return res.status(HttpStatus.OK).json({user : user, access_token : access_token});

    }
}
