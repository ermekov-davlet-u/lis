import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IUser } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepo.findOne({
      where: { userName: username },
    });
  }

  async findAll(): Promise<User[] | undefined> {
    return this.userRepo.find();
  }

  async findOneById(userId: number): Promise<User | undefined> {
    return this.userRepo.findOneBy({
      id: userId,
    });
  }
  async createUser(body: IUser): Promise<User> {
    return this.userRepo.save({
      userName: body.userName,
      password: body.password,
    });
  }

  async update(id: any, body: IUser): Promise<any> {
    return this.userRepo.update(id, body);
  }

  async findByPayload({ username }: any): Promise<IUser> {
    return await this.userRepo.findOne({
      where: { userName: username },
    });
  }

  async deleteUser(id: number) {
    return this.userRepo.delete(id);
  }
}
