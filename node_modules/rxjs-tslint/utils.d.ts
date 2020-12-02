import * as ts from 'typescript';
export declare function subtractSets<T>(source: Set<T>, target: Set<T>): Set<T>;
export declare function concatSets<T>(set1: Set<T>, set2: Set<T>): Set<T>;
export declare function isObservable(type: ts.Type, tc: ts.TypeChecker): boolean;
export declare function returnsObservable(node: ts.CallLikeExpression, tc: ts.TypeChecker): boolean;
export declare function computeInsertionIndexForImports(sourceFile: ts.SourceFile): number;
