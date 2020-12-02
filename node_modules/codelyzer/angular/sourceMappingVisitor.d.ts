import { Fix, IOptions, Replacement, RuleFailure, RuleWalker } from 'tslint';
import * as ts from 'typescript';
import { CodeWithSourceMap } from './metadata';
export declare function isLineBreak(ch: number): boolean;
export declare class SourceMappingVisitor extends RuleWalker {
    codeWithMap: CodeWithSourceMap;
    protected basePosition: number;
    parentAST: any;
    private readonly consumer;
    constructor(sourceFile: ts.SourceFile, options: IOptions, codeWithMap: CodeWithSourceMap, basePosition: number);
    createFailure(s: number, l: number, message: string, fix?: Fix): RuleFailure;
    createReplacement(s: number, l: number, replacement: string): Replacement;
    getSourcePosition(pos: number): number;
    addParentAST(parentAST: any): any;
    private getMappedInterval;
}
