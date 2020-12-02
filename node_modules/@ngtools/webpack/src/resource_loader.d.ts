export declare class WebpackResourceLoader {
    private _parentCompilation;
    private _context;
    private _fileDependencies;
    private _reverseDependencies;
    private _cachedSources;
    private _cachedEvaluatedSources;
    constructor();
    update(parentCompilation: any): void;
    getResourceDependencies(filePath: string): never[] | Set<string>;
    getAffectedResources(file: string): never[] | Set<string>;
    private _compile;
    private _evaluate;
    get(filePath: string): Promise<string>;
}
