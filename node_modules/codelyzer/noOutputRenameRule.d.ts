import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "@Outputs should not be renamed";
    apply(sourceFile: SourceFile): RuleFailure[];
}
export declare const getFailureMessage: () => string;
