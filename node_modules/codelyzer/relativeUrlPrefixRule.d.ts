import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "The ./ prefix is standard syntax for relative URLs. (https://angular.io/styleguide#style-05-04)";
    apply(sourceFile: SourceFile): RuleFailure[];
}
