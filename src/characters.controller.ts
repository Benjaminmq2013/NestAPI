import { Controller,  Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/characters")
export class CharactersController{
  constructor(private readonly appService: AppService) {}
  @Get()
  getCharacters():string{
    return this.appService.getCharacters();
  }
}