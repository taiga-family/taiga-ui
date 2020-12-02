import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "Avoid using <%s/> elements as they create visual accessibility issues.";
    apply(sourceFile: SourceFile): RuleFailure[];
}
export declare function getFailureMessage(element: string): string;
