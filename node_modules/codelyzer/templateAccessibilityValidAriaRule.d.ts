import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    apply(sourceFile: SourceFile): RuleFailure[];
}
export declare const getFailureMessage: (name: string) => string;
