import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_MESSAGE = "tabindex attribute cannot be positive";
    apply(sourceFile: SourceFile): RuleFailure[];
}
