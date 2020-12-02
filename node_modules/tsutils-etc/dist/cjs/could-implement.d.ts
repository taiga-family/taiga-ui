import * as ts from "typescript";
export declare function couldImplement(type: ts.Type, name: string | RegExp, qualified?: {
    name: RegExp;
    typeChecker: ts.TypeChecker;
}): boolean;
