import { Controller, Post, Query } from '@nestjs/common';
import { ScrapeService } from '../../shared/service/scrape/scrape.service';

@Controller('scrape')
export class ScrapeController {

  constructor(private scrapeService: ScrapeService) {}

  @Post()
  async getUrl(@Query() query) {
    /**
     * Most of the logic for scraping and saving data is done inside service
     */
    return await this.scrapeService.scrapeUrl(query.url);
  }
}
