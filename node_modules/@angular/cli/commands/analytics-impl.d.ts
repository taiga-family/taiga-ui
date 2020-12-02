import { Command } from '../models/command';
import { Arguments } from '../models/interface';
import { Schema as AnalyticsCommandSchema } from './analytics';
export declare class AnalyticsCommand extends Command<AnalyticsCommandSchema> {
    run(options: AnalyticsCommandSchema & Arguments): Promise<1 | 0 | 2 | 3 | 4>;
}
