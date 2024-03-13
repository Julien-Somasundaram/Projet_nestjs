import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private userServices : UserService) {}

//     @Get('number/:val')
//     getTest(@Param('val',ParseIntPipe) val: number): number {
//       return this.userServices.getTest(val+1);
//   }
}