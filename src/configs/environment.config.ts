import * as path from 'path';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

const env = process.env.NODE_ENV || 'dev';
const dotenv_path = path.resolve(process.cwd(), `.env.${env}`);
const result = dotenv.config({ path: dotenv_path });

if (result.error) {
  Logger.error('Environment Error!', result.error.message);
}
