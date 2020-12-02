/**
 * Retrieves or sets Angular configuration values in the angular.json file for the workspace.
 */
export interface Schema {
    /**
     * When true, accesses the global configuration in the caller's home directory.
     */
    global?: boolean;
    /**
     * Shows a help message for this command in the console.
     */
    help?: HelpUnion;
    /**
     * The configuration key to set or query, in JSON path format. For example:
     * "a[3].foo.bar[2]". If no new value is provided, returns the current value of this key.
     */
    jsonPath?: string;
    /**
     * If provided, a new value for the given configuration key.
     */
    value?: Value;
}
/**
 * Shows a help message for this command in the console.
 */
export declare type HelpUnion = boolean | HelpEnum;
export declare enum HelpEnum {
    HelpJson = "JSON",
    Json = "json"
}
/**
 * If provided, a new value for the given configuration key.
 */
export declare type Value = boolean | number | string;
