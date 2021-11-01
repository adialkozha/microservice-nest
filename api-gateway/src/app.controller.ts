import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('HELLO')
    private readonly appService: ClientProxy,
  ) {}

  @Get()
  async getHello() {
    let data = '';
    return await this.appService.send<string>({ cmd: 'get_users' }, data);
  }
}
