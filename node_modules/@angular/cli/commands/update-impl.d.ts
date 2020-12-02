import { Command } from '../models/command';
import { Arguments } from '../models/interface';
import { Schema as UpdateCommandSchema } from './update';
export declare class UpdateCommand extends Command<UpdateCommandSchema> {
    readonly allowMissingWorkspace = true;
    private workflow;
    private packageManager;
    initialize(): Promise<void>;
    private executeSchematic;
    /**
     * @return Whether or not the migration was performed successfully.
     */
    private executeMigration;
    /**
     * @return Whether or not the migrations were performed successfully.
     */
    private executeMigrations;
    private executePackageMigrations;
    run(options: UpdateCommandSchema & Arguments): Promise<number>;
    /**
     * @return Whether or not the commit was successful.
     */
    private commit;
    private checkCleanGit;
    /**
     * Checks if the current installed CLI version is older than the latest version.
     * @returns `true` when the installed version is older.
    */
    private checkCLILatestVersion;
}
