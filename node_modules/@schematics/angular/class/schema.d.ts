/**
 * Creates a new generic class definition in the given or default project.
 */
export interface Schema {
    /**
     * When true, applies lint fixes after generating the class.
     */
    lintFix?: boolean;
    /**
     * The name of the new class.
     */
    name: string;
    /**
     * The path at which to create the class, relative to the workspace root.
     */
    path?: string;
    /**
     * The name of the project.
     */
    project?: string;
    /**
     * When true, does not create "spec.ts" test files for the new class.
     */
    skipTests?: boolean;
    /**
     * Adds a developer-defined type to the filename, in the format "name.type.ts".
     */
    type?: string;
}
