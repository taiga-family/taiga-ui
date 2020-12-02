import * as Lint from 'tslint';
import * as ts from 'typescript';
export declare class Rule extends Lint.Rules.TypedRule {
    static metadata: Lint.IRuleMetadata;
    static IMPORT_FAILURE_STRING: string;
    static OBSERVABLE_FAILURE_STRING: string;
    applyWithProgram(sourceFile: ts.SourceFile, program: ts.Program): Lint.RuleFailure[];
    private walk;
    private removePatchedOperatorImports;
}
