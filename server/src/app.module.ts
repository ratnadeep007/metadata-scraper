import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapeController } from './controller/scrape/scrape.controller';
import { ScrapeService } from './shared/service/scrape/scrape.service';

@Module({
  imports: [],
  controllers: [AppController, ScrapeController],
  providers: [AppService, ScrapeService],
})
export class AppModule {}
