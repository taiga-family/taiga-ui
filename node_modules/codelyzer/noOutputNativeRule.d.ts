import { IRuleMetadata, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
interface FailureParameters {
    readonly className: string;
    readonly propertyName: string;
}
export declare const getFailureMessage: (failureParameters: FailureParameters) => string;
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "In the class \"%s\", the output property \"%s\" should not be named or renamed as a native event";
    apply(sourceFile: SourceFile): RuleFailure[];
}
export {};
