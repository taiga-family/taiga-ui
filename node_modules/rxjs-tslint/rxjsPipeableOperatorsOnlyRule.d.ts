import * as Lint from 'tslint';
import * as ts from 'typescript';
export declare class Rule extends Lint.Rules.TypedRule {
    static metadata: Lint.IRuleMetadata;
    static FAILURE_STRING: string;
    applyWithProgram(sourceFile: ts.SourceFile, program: ts.Program): Lint.RuleFailure[];
    private walk;
    private removePatchedOperatorImports;
}
