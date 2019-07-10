import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapeController } from './controller/scrape/scrape.controller';
import { ScrapeService } from './shared/service/scrape/scrape.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ScrapeSchema } from './schemas/scrape.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/emcode_scraper'),
    MongooseModule.forFeature([
      {
        name: 'scrape',
        schema: ScrapeSchema
      }
    ])
  ],
  controllers: [AppController, ScrapeController],
  providers: [AppService, ScrapeService],
})
export class AppModule {}
