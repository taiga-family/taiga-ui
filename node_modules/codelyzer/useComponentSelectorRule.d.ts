import { IRuleMetadata, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
interface FailureParameters {
    readonly className: string;
}
export declare const getFailureMessage: (failureParameters: FailureParameters) => string;
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "The selector of the component \"%s\" is mandatory";
    apply(sourceFile: SourceFile): RuleFailure[];
}
export {};
