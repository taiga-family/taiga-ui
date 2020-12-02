/**
 * Configures the gathering of Angular CLI usage metrics. See
 * https://angular.io/cli/usage-analytics-gathering.
 */
export interface Schema {
    /**
     * Shows a help message for this command in the console.
     */
    help?: HelpUnion;
    /**
     * Sets the default analytics enablement status for the project.
     */
    projectSetting?: ProjectSetting;
    /**
     * Directly enables or disables all usage analytics for the user, or prompts the user to set
     * the status interactively, or sets the default status for the project.
     */
    settingOrProject: SettingOrProject;
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
 * Sets the default analytics enablement status for the project.
 */
export declare enum ProjectSetting {
    Off = "off",
    On = "on",
    Prompt = "prompt"
}
/**
 * Directly enables or disables all usage analytics for the user, or prompts the user to set
 * the status interactively, or sets the default status for the project.
 */
export declare enum SettingOrProject {
    Ci = "ci",
    Off = "off",
    On = "on",
    Project = "project",
    Prompt = "prompt"
}
