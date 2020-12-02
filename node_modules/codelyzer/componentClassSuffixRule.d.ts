import * as Lint from 'tslint';
import * as ts from 'typescript';
import { NgWalker } from './angular';
import { F2 } from './util/function';
export declare class Rule extends Lint.Rules.AbstractRule {
    static readonly metadata: Lint.IRuleMetadata;
    static readonly FAILURE_STRING = "The name of the class %s should end with the suffix %s (https://angular.io/styleguide#style-02-03)";
    static walkerBuilder: F2<ts.SourceFile, Lint.IOptions, NgWalker>;
    static validate(className: string, suffixList: string[]): boolean;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
