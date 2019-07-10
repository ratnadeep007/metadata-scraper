import { Injectable } from '@nestjs/common';
import { scrapeAndExtract } from 'scrappy';

@Injectable()
export class ScrapeService {

  async scrapeUrl(url: string) {
    let scrapeData = await scrapeAndExtract(url)
    if (!scrapeData['image'] || scrapeData['image'] === {}) {
      scrapeData['image']['type'] = 'image'
      scrapeData['image']['url'] = 'https://assets.justinmind.com/blog/wp-content/uploads/2018/08/pen-tool-illustration-768x245.png'
    }
    console.log(scrapeData);
    return scrapeData;
  }
}
