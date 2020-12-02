/**
 * Generates and/or modifies files based on a schematic.
 */
export interface Schema {
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
     * The schematic or collection:schematic to generate.
     */
    schematic?: string;
}
/**
 * Shows a help message for this command in the console.
 */
export declare type HelpUnion = boolean | HelpEnum;
export declare enum HelpEnum {
    HelpJson = "JSON",
    Json = "json"
}
