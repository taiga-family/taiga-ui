import * as Lint from 'tslint';
import * as ts from 'typescript';
export declare class Rule extends Lint.Rules.AbstractRule {
    static readonly metadata: Lint.IRuleMetadata;
    static readonly FAILURE_STRING = "The name of the class %s should end with the suffix %s (https://angular.io/styleguide#style-02-03)";
    static validate(className: string, suffixes: string[]): boolean;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
