/**
 * Creates a new workspace and an initial Angular app.
 */
export interface Schema {
    /**
     * A collection of schematics to use in generating the initial app.
     */
    collection?: string;
    /**
     * When true, disables interactive input prompts for options with a default.
     */
    defaults?: boolean;
    /**
     * When true, runs through and reports activity without writing out results.
     */
    dryRun?: boolean;
    /**
     * When true, forces overwriting of existing files.
     */
    force?: boolean;
    /**
     * Shows a help message for this command in the console.
     */
    help?: HelpUnion;
    /**
     * When false, disables interactive input prompts.
     */
    interactive?: boolean;
    /**
     * When true, adds more details to output logging.
     */
    verbose?: boolean;
}
/**
 * Shows a help message for this command in the console.
 */
export declare type HelpUnion = boolean | HelpEnum;
export declare enum HelpEnum {
    HelpJson = "JSON",
    Json = "json"
}
