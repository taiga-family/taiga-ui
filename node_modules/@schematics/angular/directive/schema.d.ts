/**
 * Creates a new generic directive definition in the given or default project.
 */
export interface Schema {
    /**
     * When true, the declaring NgModule exports this directive.
     */
    export?: boolean;
    /**
     * When true (the default), creates the new files at the top level of the current project.
     */
    flat?: boolean;
    /**
     * When true, applies lint fixes after generating the directive.
     */
    lintFix?: boolean;
    /**
     * The declaring NgModule.
     */
    module?: string;
    /**
     * The name of the new directive.
     */
    name: string;
    /**
     * The path at which to create the interface that defines the directive, relative to the
     * workspace root.
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
     * The HTML selector to use for this directive.
     */
    selector?: string;
    /**
     * When true, does not import this directive into the owning NgModule.
     */
    skipImport?: boolean;
    /**
     * When true, does not create "spec.ts" test files for the new class.
     */
    skipTests?: boolean;
}
