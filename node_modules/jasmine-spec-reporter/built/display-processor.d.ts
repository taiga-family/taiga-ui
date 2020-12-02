/// <reference types="jasmine" />
import { Configuration } from "./configuration";
import { CustomReporterResult } from "./spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;
export declare class DisplayProcessor {
    protected configuration: Configuration;
    constructor(configuration: Configuration);
    displayJasmineStarted(info: SuiteInfo, log: string): string;
    displaySuite(suite: CustomReporterResult, log: string): string;
    displaySpecStarted(spec: CustomReporterResult, log: string): string;
    displaySuccessfulSpec(spec: CustomReporterResult, log: string): string;
    displayFailedSpec(spec: CustomReporterResult, log: string): string;
    displaySpecErrorMessages(spec: CustomReporterResult, log: string): string;
    displaySummaryErrorMessages(spec: CustomReporterResult, log: string): string;
    displayPendingSpec(spec: CustomReporterResult, log: string): string;
}
