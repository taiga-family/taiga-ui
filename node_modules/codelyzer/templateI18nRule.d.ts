import { IRuleMetadata, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING_ATTR = "Missing custom message identifier. For more information visit https://angular.io/guide/i18n";
    static readonly FAILURE_STRING_TEXT = "Each element containing text node should have an i18n attribute";
    apply(sourceFile: SourceFile): RuleFailure[];
    isEnabled(): boolean;
}
