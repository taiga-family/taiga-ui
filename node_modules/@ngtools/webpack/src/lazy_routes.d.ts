import * as ts from 'typescript';
export interface LazyRouteMap {
    [path: string]: string;
}
export declare function findLazyRoutes(filePath: string, host: ts.CompilerHost, program?: ts.Program, compilerOptions?: ts.CompilerOptions): LazyRouteMap;
