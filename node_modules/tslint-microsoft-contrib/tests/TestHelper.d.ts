import * as Lint from 'tslint';
export declare namespace TestHelper {
    let RULES_DIRECTORY: string;
    let FORMATTER_DIRECTORY: string;
    let FILE_ENCODING: string;
    interface FailurePosition {
        character: number;
        line: number;
        position?: number;
    }
    interface Fix {
        innerStart: number;
        innerLength: number;
        innerText: string;
    }
    interface ExpectedFailure {
        ruleName: string;
        name: string;
        failure?: string;
        ruleSeverity?: string;
        endPosition?: FailurePosition;
        startPosition: FailurePosition;
        fix?: Fix;
    }
    function assertNoViolation(ruleName: string, inputFileOrScript: string, useTypeChecker?: boolean): void;
    function assertNoViolationWithOptions(ruleName: string, options: any[] | undefined, inputFileOrScript: string, useTypeChecker?: boolean): void;
    function assertViolationsWithOptions(ruleName: string, options: any[] | undefined, inputFileOrScript: string, expectedFailures: ExpectedFailure[], useTypeChecker?: boolean): void;
    function assertViolations(ruleName: string, inputFileOrScript: string, expectedFailures: ExpectedFailure[], useTypeChecker?: boolean): void;
    function assertViolationsWithTypeChecker(ruleName: string, inputFileOrScript: string, expectedFailures: ExpectedFailure[]): void;
    function runRule(ruleName: string, userOptions: any[] | undefined, inputFileOrScript: string, useTypeChecker?: boolean): Lint.LintResult;
}
