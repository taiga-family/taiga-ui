import { IRuleMetadata, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING: string;
    apply(sourceFile: SourceFile): RuleFailure[];
}
export declare const getFailureMessage: (className: string, propertyName: string) => string;
