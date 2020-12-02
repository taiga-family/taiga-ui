import * as rollup from 'rollup';
export interface DependencyList {
    /** Direct dependencies including peerDependencies and other entry points. */
    dependencies?: string[];
    /** Direct bundled dependencies */
    bundledDependencies?: string[];
}
export declare class ExternalModuleIdStrategy {
    private moduleFormat;
    private dependencyList;
    constructor(moduleFormat: rollup.ModuleFormat, dependencyList: DependencyList);
    /** Return true when moduleId is to be treated as external  */
    isExternalDependency(moduleId: string): boolean;
    /**
     * Returns a array of strings or a RegExp of non-bundled dependencies.
     */
    getNonBundledDependencies(): string[] | RegExp;
}
