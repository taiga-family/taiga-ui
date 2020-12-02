import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "Prefer to declare `@Output` as readonly since they are not supposed to be reassigned";
    apply(sourceFile: SourceFile): RuleFailure[];
}
