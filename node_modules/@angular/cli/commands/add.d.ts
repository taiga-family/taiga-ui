/**
 * Adds support for an external library to your project.
 */
export interface Schema {
    /**
     * The package to be added.
     */
    collection?: string;
    /**
     * When true, disables interactive input prompts for options with a default.
     */
    defaults?: boolean;
    /**
     * Shows a help message for this command in the console.
     */
    help?: HelpUnion;
    /**
     * When false, disables interactive input prompts.
     */
    interactive?: boolean;
    /**
     * The NPM registry to use.
     */
    registry?: string;
    /**
     * Display additional details about internal operations during execution.
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
