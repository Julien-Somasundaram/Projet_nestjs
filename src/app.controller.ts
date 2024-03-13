import { AppService } from './app.service';
import { ConfigurationService } from './configuration/configuration.service';
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { User } from './user/model/user';
import { Book } from './book/model/book.entity';
import { UserService } from './user/user.service';
import { CreateBookDto } from './book/create-book.dto';

import { BookService } from './book/book.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private configService: ConfigurationService,
    private userService: UserService,
    private bookService: BookService,
  ) {}

  @Get('number/:number')
  addTenToGivenNumber(@Param('number', ParseIntPipe) number: number): number {
    return number + 10;
  }

  @Get('environment')
  getEnvironment(): string {
    return this.configService.getValue('environment');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user/:username')
  getUser(@Param('username') username: string): User {
    return this.userService.getUser(username);
  }
  @Get('books')
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
  @Post('books')
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }


  
}
