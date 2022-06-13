import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API de Hunter X Hunter';
  }
  getCharacters():string{
    return "Illumi" 
  }
}
