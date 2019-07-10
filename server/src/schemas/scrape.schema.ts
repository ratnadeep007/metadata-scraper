import * as mongoose from 'mongoose';

export const ScrapeSchema = new mongoose.Schema({
  type: String,
  image: [{}],
  video: [{}],
  audio: [{}],
  url: String,
  canonicalUrl: String,
  encodingFormat: String,
  headline: String,
  description: String,
  provider: {},
  author: {},
  twitter: {},
  apps: {}
});