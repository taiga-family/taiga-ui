import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_MESSAGE = "Scope attribute can only be on <th> element";
    apply(sourceFile: SourceFile): RuleFailure[];
}
