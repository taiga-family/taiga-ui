/// <reference types="jasmine" />
import { Configuration } from "./configuration";
import CustomReporter = jasmine.CustomReporter;
import SuiteInfo = jasmine.SuiteInfo;
import RunDetails = jasmine.RunDetails;
export interface CustomReporterResult extends jasmine.CustomReporterResult {
    duration?: string;
}
export interface ExecutedSpecs {
    failed: CustomReporterResult[];
    pending: CustomReporterResult[];
    successful: CustomReporterResult[];
}
export declare class SpecReporter implements CustomReporter {
    private static initProcessors(configuration);
    private logger;
    private specs;
    private display;
    private summary;
    private metrics;
    private configuration;
    constructor(configuration?: Configuration);
    jasmineStarted(suiteInfo: SuiteInfo): void;
    jasmineDone(runDetails: RunDetails): void;
    suiteStarted(result: CustomReporterResult): void;
    suiteDone(result: CustomReporterResult): void;
    specStarted(result: CustomReporterResult): void;
    specDone(result: CustomReporterResult): void;
    private runDetailsToResult(runDetails);
}
