import * as Lint from 'tslint';
import * as ts from 'typescript';
export declare class Rule extends Lint.Rules.AbstractRule {
    static readonly metadata: Lint.IRuleMetadata;
    static FAILURE_STRING: string;
    prefix: string;
    private prefixChecker;
    constructor(options: Lint.IOptions);
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
    isEnabled(): boolean;
    validatePrefix(prefix: string): boolean;
}
