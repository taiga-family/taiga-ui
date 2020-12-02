import { ArchitectCommand, ArchitectCommandOptions } from '../models/architect-command';
import { Arguments } from '../models/interface';
import { Schema as BuildCommandSchema } from './build';
export declare class BuildCommand extends ArchitectCommand<BuildCommandSchema> {
    readonly target = "build";
    run(options: ArchitectCommandOptions & Arguments): Promise<number>;
    reportAnalytics(paths: string[], options: BuildCommandSchema & Arguments, dimensions?: (boolean | number | string)[], metrics?: (boolean | number | string)[]): Promise<void>;
}
