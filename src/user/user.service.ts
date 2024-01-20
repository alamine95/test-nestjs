import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import {hash} from 'bcrypt'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ){}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = await this.hashPassword(createUserDto.password);
    return this.userRepo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepo.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.password = await this.hashPassword(updateUserDto.password);
    user.id = id;
    return this.userRepo.save(user);
  }

  remove(id: number): Promise<{ affected?: number}> {
    return this.userRepo.delete(id);
  }

  async findOneByLogin(email: string): Promise<User> {
    return this.userRepo.findOne({ where: {email}});
  }

  async hashPassword(password: string){
    const saltOrRounds = 10;
    return await hash(password, saltOrRounds)
  }
}
