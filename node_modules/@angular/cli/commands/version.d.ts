/**
 * Outputs Angular CLI version.
 */
export interface Schema {
    /**
     * Shows a help message for this command in the console.
     */
    help?: HelpUnion;
}
/**
 * Shows a help message for this command in the console.
 */
export declare type HelpUnion = boolean | HelpEnum;
export declare enum HelpEnum {
    HelpJson = "JSON",
    Json = "json"
}
