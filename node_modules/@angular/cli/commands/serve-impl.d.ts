import { ArchitectCommand, ArchitectCommandOptions } from '../models/architect-command';
import { Arguments } from '../models/interface';
import { Schema as BuildCommandSchema } from './build';
import { Schema as ServeCommandSchema } from './serve';
export declare class ServeCommand extends ArchitectCommand<ServeCommandSchema> {
    readonly target = "serve";
    validate(_options: ArchitectCommandOptions & Arguments): boolean;
    run(options: ArchitectCommandOptions & Arguments): Promise<number>;
    reportAnalytics(paths: string[], options: BuildCommandSchema & Arguments, dimensions?: (boolean | number | string)[], metrics?: (boolean | number | string)[]): Promise<void>;
}
