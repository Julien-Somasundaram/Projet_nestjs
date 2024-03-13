import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('user/:username')
  getUser(@Param('username') username: string): {username: string; CreatedAt: Date;}{
    return {
      username: username,
      CreatedAt: new Date()
    }
  }

  @Post('user/')
  createUser(@Body() body: {username: string}): {username: string; CreatedAt: Date;}{
    return {
      username: body.username,
      CreatedAt: new Date()
    }
  }
//   @Get('number/:val')
//   getTest(@Param('val',ParseIntPipe) val: number): number {
//     return UserService.getTest(val+1);
// }
}
