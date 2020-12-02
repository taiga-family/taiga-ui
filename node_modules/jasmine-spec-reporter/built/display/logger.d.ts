/// <reference types="jasmine" />
import { DisplayProcessor } from "../display-processor";
import { CustomReporterResult } from "../spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;
export declare type ProcessFunction = (displayProcessor: DisplayProcessor, object: ProcessObject, log: string) => string;
export declare type ProcessObject = SuiteInfo | CustomReporterResult;
export declare class Logger {
    private displayProcessors;
    private print;
    private indent;
    private currentIndent;
    private lastWasNewLine;
    constructor(displayProcessors: DisplayProcessor[], print: (line: string) => void);
    log(stuff: string): void;
    process(object: ProcessObject, processFunction: ProcessFunction): void;
    newLine(): void;
    resetIndent(): void;
    increaseIndent(): void;
    decreaseIndent(): void;
}
