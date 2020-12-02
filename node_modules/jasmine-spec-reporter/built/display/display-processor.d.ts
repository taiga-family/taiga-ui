/// <reference types="jasmine" />
import { Configuration } from "../configuration";
import { CustomReporterResult } from "../custom-reporter-result";
import SuiteInfo = jasmine.SuiteInfo;
export declare class DisplayProcessor {
    protected configuration: Configuration;
    constructor(configuration: Configuration);
    displayJasmineStarted(info: SuiteInfo, log: String): String;
    displaySuite(suite: CustomReporterResult, log: String): String;
    displaySpecStarted(spec: CustomReporterResult, log: String): String;
    displaySuccessfulSpec(spec: CustomReporterResult, log: String): String;
    displayFailedSpec(spec: CustomReporterResult, log: String): String;
    displaySpecErrorMessages(spec: CustomReporterResult, log: String): String;
    displaySummaryErrorMessages(spec: CustomReporterResult, log: String): String;
    displayPendingSpec(spec: CustomReporterResult, log: String): String;
}
