import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "The cyclomatic complexity exceeded the defined limit (cost '%s'). Your template should be refactored.";
    static readonly DEFAULT_MAX_COMPLEXITY = 5;
    apply(sourceFile: SourceFile): RuleFailure[];
    isEnabled(): boolean;
}
export declare const getFailureMessage: (maxComplexity?: number) => string;
