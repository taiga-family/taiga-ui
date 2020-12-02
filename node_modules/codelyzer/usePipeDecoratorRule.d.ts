import { IRuleMetadata, RuleFailure } from 'tslint/lib';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING: string;
    apply(sourceFile: SourceFile): RuleFailure[];
}
