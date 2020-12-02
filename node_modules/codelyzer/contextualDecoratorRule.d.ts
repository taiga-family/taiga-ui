import { IRuleMetadata, RuleFailure } from 'tslint';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
import { AngularClassDecoratorKeys } from './util/utils';
interface FailureParameters {
    readonly classDecoratorName: AngularClassDecoratorKeys;
}
export declare const getFailureMessage: (failureParameters: FailureParameters) => string;
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "Decorator out of context for \"@%s()\"";
    apply(sourceFile: SourceFile): RuleFailure[];
}
export {};
