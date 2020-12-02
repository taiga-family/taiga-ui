import { IRuleMetadata, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
import { AngularLifecycleInterfaceKeys, AngularLifecycleMethodKeys } from './util/utils';
interface FailureParameters {
    readonly interfaceName: AngularLifecycleInterfaceKeys;
    readonly methodName: AngularLifecycleMethodKeys;
}
export declare const getFailureMessage: (failureParameters: FailureParameters) => string;
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING: string;
    apply(sourceFile: SourceFile): RuleFailure[];
}
export {};
