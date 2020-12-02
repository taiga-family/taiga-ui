/**
 * Creates a new, generic interceptor definition in the given or default project.
 */
export interface Schema {
    /**
     * When true (the default), creates files at the top level of the project.
     */
    flat?: boolean;
    /**
     * When true, applies lint fixes after generating the interceptor.
     */
    lintFix?: boolean;
    /**
     * The name of the interceptor.
     */
    name: string;
    /**
     * The path at which to create the interceptor, relative to the workspace root.
     */
    path?: string;
    /**
     * The name of the project.
     */
    project?: string;
    /**
     * When true, does not create "spec.ts" test files for the new interceptor.
     */
    skipTests?: boolean;
}
