import * as ts from "typescript";
export declare function isType(type: ts.Type, name: string | RegExp, qualified?: {
    name: RegExp;
    typeChecker: ts.TypeChecker;
}): boolean;
