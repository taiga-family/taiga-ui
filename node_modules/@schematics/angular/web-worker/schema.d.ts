/**
 * Creates a new generic web worker definition in the given or default project.
 */
export interface Schema {
    /**
     * The name of the worker.
     */
    name: string;
    /**
     * The path at which to create the worker file, relative to the current workspace.
     */
    path?: string;
    /**
     * The name of the project.
     */
    project: string;
    /**
     * Add a worker creation snippet in a sibling file of the same name.
     */
    snippet?: boolean;
    /**
     * The target to apply web worker to.
     */
    target?: string;
}
