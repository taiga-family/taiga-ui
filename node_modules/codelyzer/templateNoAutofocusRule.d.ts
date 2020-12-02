import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "autofocus attribute should not be used, as it reduces usability and accessibility for users.";
    apply(sourceFile: SourceFile): RuleFailure[];
}
