/**
 * Creates a new generic interface definition in the given or default project.
 */
export interface Schema {
    /**
     * When true, applies lint fixes after generating the interface.
     */
    lintFix?: boolean;
    /**
     * The name of the interface.
     */
    name: string;
    /**
     * The path at which to create the interface, relative to the workspace root.
     */
    path?: string;
    /**
     * A prefix to apply to generated selectors.
     */
    prefix?: string;
    /**
     * The name of the project.
     */
    project?: string;
    /**
     * Adds a developer-defined type to the filename, in the format "name.type.ts".
     */
    type?: string;
}
