import * as ts from 'typescript';
import { EntryPointNode } from '../ng-package/nodes';
export declare class NgccProcessor {
    private readonly compilerOptions;
    private readonly entryPoints;
    private _processedModules;
    private _logger;
    private _nodeModulesDirectory;
    private _pathMappings;
    private _entryPointsUrl;
    constructor(compilerOptions: ts.CompilerOptions, entryPoints: EntryPointNode[]);
    processModule(moduleName: string, resolvedModule: ts.ResolvedModule | ts.ResolvedTypeReferenceDirective): void;
    /**
     * Try resolve a package.json file from the resolved .d.ts file.
     */
    private tryResolvePackage;
    private findNodeModulesDirectory;
}
