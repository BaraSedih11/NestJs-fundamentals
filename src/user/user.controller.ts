import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findAllUsers(): string[] {
    return ['Ahmad', 'Khaled', 'Fatma'];
  }

  @Post()
  createUser(): string {
    return 'Create new user';
  }
}
