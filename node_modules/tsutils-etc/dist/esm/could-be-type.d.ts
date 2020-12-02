import * as ts from "typescript";
export declare function couldBeType(type: ts.Type, name: string | RegExp, qualified?: {
    name: RegExp;
    typeChecker: ts.TypeChecker;
}): boolean;
