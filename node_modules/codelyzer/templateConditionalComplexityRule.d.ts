import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly DEFAULT_MAX_COMPLEXITY = 3;
    static readonly FAILURE_STRING = "The condition complexity (cost '%s') exceeded the defined limit (cost '%s'). The conditional expression should be moved into the component.";
    apply(sourceFile: SourceFile): RuleFailure[];
    isEnabled(): boolean;
}
export declare const getFailureMessage: (totalComplexity: number, maxComplexity?: number) => string;
