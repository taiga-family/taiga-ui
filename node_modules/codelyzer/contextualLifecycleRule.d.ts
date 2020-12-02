import { IRuleMetadata, RuleFailure } from 'tslint/lib';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
import { AngularClassDecoratorKeys, AngularLifecycleMethodKeys } from './util/utils';
interface FailureParameters {
    readonly className: string;
    readonly decoratorName: AngularClassDecoratorKeys;
    readonly methodName: AngularLifecycleMethodKeys;
}
export declare const getFailureMessage: (failureParameters: FailureParameters) => string;
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "The method \"%s\" is not allowed for class \"%s\" because it is decorated with \"%s\"";
    apply(sourceFile: SourceFile): RuleFailure[];
}
export {};
