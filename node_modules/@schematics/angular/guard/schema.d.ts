/**
 * Generates a new, generic route guard definition in the given or default project.
 */
export interface Schema {
    /**
     * When true (the default), creates the new files at the top level of the current project.
     */
    flat?: boolean;
    /**
     * Specifies which interfaces to implement.
     */
    implements?: Implement[];
    /**
     * When true, applies lint fixes after generating the guard.
     */
    lintFix?: boolean;
    /**
     * The name of the new route guard.
     */
    name: string;
    /**
     * The path at which to create the interface that defines the guard, relative to the current
     * workspace.
     */
    path?: string;
    /**
     * The name of the project.
     */
    project?: string;
    /**
     * When true, does not create "spec.ts" test files for the new guard.
     */
    skipTests?: boolean;
    /**
     * When true (the default), generates a  "spec.ts" test file for the new guard.
     * @deprecated Use "skipTests" instead.
     */
    spec?: boolean;
}
export declare enum Implement {
    CanActivate = "CanActivate",
    CanActivateChild = "CanActivateChild",
    CanDeactivate = "CanDeactivate",
    CanLoad = "CanLoad"
}
