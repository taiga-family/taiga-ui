/**
 * Creates a new generic NgModule definition in the given or default project.
 */
export interface Schema {
    /**
     * When true, the new NgModule imports "CommonModule".
     */
    commonModule?: boolean;
    /**
     * When true, creates the new files at the top level of the current project root.
     */
    flat?: boolean;
    /**
     * When true, applies lint fixes after generating the module.
     */
    lintFix?: boolean;
    /**
     * The declaring NgModule.
     */
    module?: string;
    /**
     * The name of the NgModule.
     */
    name: string;
    /**
     * The path at which to create the NgModule, relative to the workspace root.
     */
    path?: string;
    /**
     * The name of the project.
     */
    project?: string;
    /**
     * The route path for a lazy-loaded module. When supplied, creates a component in the new
     * module, and adds the route to that component in the `Routes` array declared in the module
     * provided in the `--module` option.
     */
    route?: string;
    /**
     * When true, creates a routing module.
     */
    routing?: boolean;
    /**
     * The scope for the new routing module.
     */
    routingScope?: RoutingScope;
}
/**
 * The scope for the new routing module.
 */
export declare enum RoutingScope {
    Child = "Child",
    Root = "Root"
}
