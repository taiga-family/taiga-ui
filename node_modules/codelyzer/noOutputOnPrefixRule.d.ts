import * as Lint from 'tslint';
import * as ts from 'typescript';
export declare class Rule extends Lint.Rules.AbstractRule {
    static readonly metadata: Lint.IRuleMetadata;
    static readonly FAILURE_STRING = "In the class \"%s\", the output property \"%s\" should not be prefixed with on";
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
