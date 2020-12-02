import { IRuleMetadata, RuleFailure } from 'tslint/lib';
import { AbstractRule } from 'tslint/lib/rules';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "Import statement's curly braces must be spaced exactly by a space to the right and a space to the left";
    apply(sourceFile: SourceFile): RuleFailure[];
}
