import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "click must be accompanied by either keyup, keydown or keypress event for accessibility";
    apply(sourceFile: SourceFile): RuleFailure[];
}
