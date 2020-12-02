import { Command } from '../models/command';
import { Schema as VersionCommandSchema } from './version';
export declare class VersionCommand extends Command<VersionCommandSchema> {
    static aliases: string[];
    run(): Promise<void>;
    private getVersion;
    private getIvyWorkspace;
}
