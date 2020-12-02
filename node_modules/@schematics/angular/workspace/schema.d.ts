export interface Schema {
    /**
     * When true, creates a workspace without any testing frameworks. (Use for learning purposes
     * only.)
     */
    minimal?: boolean;
    /**
     * The name of the workspace.
     */
    name: string;
    /**
     * The path where new projects will be created.
     */
    newProjectRoot?: string;
    /**
     * The package manager used to install dependencies.
     */
    packageManager?: PackageManager;
    /**
     * Creates a workspace with stricter TypeScript compiler options.
     */
    strict?: boolean;
    /**
     * The version of the Angular CLI to use.
     */
    version: string;
}
/**
 * The package manager used to install dependencies.
 */
export declare enum PackageManager {
    Cnpm = "cnpm",
    Npm = "npm",
    Pnpm = "pnpm",
    Yarn = "yarn"
}
