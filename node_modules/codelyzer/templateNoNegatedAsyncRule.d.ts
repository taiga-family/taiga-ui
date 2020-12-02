import { IRuleMetadata, RuleFailure } from 'tslint/lib';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript';
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING_NEGATED_PIPE = "Async pipes should not be negated. Use (observable | async) === (false | null | undefined) to check its value instead";
    static readonly FAILURE_STRING_UNSTRICT_EQUALITY = "Async pipes must use strict equality `===` when comparing with `false`";
    apply(sourceFile: SourceFile): RuleFailure[];
}
