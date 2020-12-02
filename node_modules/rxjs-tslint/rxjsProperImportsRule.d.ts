import * as Lint from 'tslint';
import * as ts from 'typescript';
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: Lint.IRuleMetadata;
    static RuleFailure: string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
