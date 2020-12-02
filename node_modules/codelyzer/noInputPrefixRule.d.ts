import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "@Inputs should not be prefixed by %s";
    apply(sourceFile: SourceFile): RuleFailure[];
    isEnabled(): boolean;
}
export declare const getFailureMessage: (prefixes: string[]) => string;
