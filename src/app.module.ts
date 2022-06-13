import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CharactersController } from './characters.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CharactersController],
  providers: [AppService],
})
export class AppModule {}
