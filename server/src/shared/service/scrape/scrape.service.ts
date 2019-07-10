import { Injectable } from '@nestjs/common';
import { scrapeAndExtract } from 'scrappy';

@Injectable()
export class ScrapeService {

  async scrapeUrl(url: string) {
    let scrapeData = await scrapeAndExtract(url)
    console.log(scrapeData);
    return scrapeData;
  }
}
