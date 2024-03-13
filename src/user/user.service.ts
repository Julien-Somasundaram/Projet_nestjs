import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    getTest(val : number): number {
        return val;
  }
}