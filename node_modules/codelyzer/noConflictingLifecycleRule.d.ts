import { IRuleMetadata, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
interface FailureParameters {
    readonly message: typeof Rule.FAILURE_STRING_INTERFACE_HOOK | typeof Rule.FAILURE_STRING_METHOD_HOOK;
}
export declare const getFailureMessage: (failureParameters: FailureParameters) => string;
export declare class Rule extends AbstractRule {
    static metadata: IRuleMetadata;
    static readonly FAILURE_STRING_INTERFACE_HOOK: string;
    static readonly FAILURE_STRING_METHOD_HOOK: string;
    apply(sourceFile: SourceFile): RuleFailure[];
}
export {};
