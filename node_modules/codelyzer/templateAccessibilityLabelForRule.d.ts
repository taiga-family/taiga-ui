import { IRuleMetadata, RuleFailure } from 'tslint/lib';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "A label component must be associated with a form element";
    apply(sourceFile: SourceFile): RuleFailure[];
    isEnabled(): boolean;
    private areOptionsValid;
}
