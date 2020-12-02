import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING_MOUSE_OVER = "mouseover must be accompanied by focus event for accessibility";
    static readonly FAILURE_STRING_MOUSE_OUT = "mouseout must be accompanied by blur event for accessibility";
    apply(sourceFile: SourceFile): RuleFailure[];
}
