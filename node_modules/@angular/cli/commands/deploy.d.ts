/**
 * Invokes the deploy builder for a specified project or for the default project in the
 * workspace.
 */
export interface Schema {
    /**
     * A named build target, as specified in the "configurations" section of angular.json.
     * Each named target is accompanied by a configuration of option defaults for that target.
     */
    configuration?: string;
    /**
     * Shows a help message for this command in the console.
     */
    help?: HelpUnion;
    /**
     * The name of the project to deploy.
     */
    project?: string;
}
/**
 * Shows a help message for this command in the console.
 */
export declare type HelpUnion = boolean | HelpEnum;
export declare enum HelpEnum {
    HelpJson = "JSON",
    Json = "json"
}
