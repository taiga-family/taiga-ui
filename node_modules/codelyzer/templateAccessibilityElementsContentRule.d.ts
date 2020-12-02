import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript';
export declare const getErrorMessage: (element: string) => string;
export declare class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING = "<%s/> element should have content";
    static readonly ELEMENTS: string[];
    apply(sourceFile: SourceFile): RuleFailure[];
}
