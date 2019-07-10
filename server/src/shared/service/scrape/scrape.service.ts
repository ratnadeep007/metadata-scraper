import { Injectable } from '@nestjs/common';
import { scrapeAndExtract } from 'scrappy';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Scrape } from '../../../interfaces/scrape.interface';

@Injectable()
export class ScrapeService {

  constructor(@InjectModel('scrape') private readonly scrapeModel: Model<Scrape>){}

  async scrapeUrl(url: string) {
    let scrapeData = await this.scrapeModel.find({ url: url });
    console.log(scrapeData);
    if (!scrapeData.length) {
      console.log('inside lenght');
      scrapeData = await scrapeAndExtract(url);
      const returnMongodbData = new this.scrapeModel(scrapeData);
      await returnMongodbData.save();
    }
    if (!scrapeData['image'] || scrapeData['image'] === {}) {
      scrapeData['image'] = {};
      scrapeData['image']['type'] = 'image'
      scrapeData['image']['url'] = 'https://assets.justinmind.com/blog/wp-content/uploads/2018/08/pen-tool-illustration-768x245.png'
    }
    console.log(scrapeData);
    return scrapeData;
  }
}
