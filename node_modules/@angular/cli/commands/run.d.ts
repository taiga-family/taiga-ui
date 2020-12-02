/**
 * Runs an Architect target with an optional custom builder configuration defined in your
 * project.
 */
export interface Schema {
    /**
     * A named builder configuration, defined in the "configurations" section of angular.json.
     * The builder uses the named configuration to run the given target.
     */
    configuration?: string;
    /**
     * Shows a help message for this command in the console.
     */
    help?: HelpUnion;
    /**
     * The Architect target to run.
     */
    target?: string;
}
/**
 * Shows a help message for this command in the console.
 */
export declare type HelpUnion = boolean | HelpEnum;
export declare enum HelpEnum {
    HelpJson = "JSON",
    Json = "json"
}
