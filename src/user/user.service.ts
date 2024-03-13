import { Injectable } from '@nestjs/common';
import { User } from './model/user';

@Injectable()
export class UserService {
  getUser(username: string): User {
    return { username, createdAt: new Date('1994-04-12') };
  }
}
