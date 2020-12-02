/**
 * Generates a new, generic enum definition for the given or default project.
 */
export interface Schema {
    /**
     * When true, applies lint fixes after generating the enum.
     */
    lintFix?: boolean;
    /**
     * The name of the enum.
     */
    name: string;
    /**
     * The path at which to create the enum definition, relative to the current workspace.
     */
    path?: string;
    /**
     * The name of the project in which to create the enum. Default is the configured default
     * project for the workspace.
     */
    project?: string;
}
