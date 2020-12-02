import { Arguments } from '../models/interface';
import { SchematicCommand } from '../models/schematic-command';
import { Schema as AddCommandSchema } from './add';
export declare class AddCommand extends SchematicCommand<AddCommandSchema> {
    readonly allowPrivateSchematics = true;
    initialize(options: AddCommandSchema & Arguments): Promise<void>;
    run(options: AddCommandSchema & Arguments): Promise<number | void>;
    reportAnalytics(paths: string[], options: AddCommandSchema & Arguments, dimensions?: (boolean | number | string)[], metrics?: (boolean | number | string)[]): Promise<void>;
    private isPackageInstalled;
    private executeSchematic;
    private findProjectVersion;
    private hasMismatchedPeer;
}
