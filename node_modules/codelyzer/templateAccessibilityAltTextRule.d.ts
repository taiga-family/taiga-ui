import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "%s element must have a text alternative.";
    static readonly DEFAULT_ELEMENTS: string[];
    apply(sourceFile: SourceFile): RuleFailure[];
}
export declare const getFailureMessage: (name: string) => string;
