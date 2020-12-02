/// <reference types="jasmine" />
import { Configuration } from "../configuration";
import { DisplayProcessor } from "../display-processor";
import { CustomReporterResult, ExecutedSpecs } from "../spec-reporter";
import { Logger } from "./logger";
import SuiteInfo = jasmine.SuiteInfo;
export declare class ExecutionDisplay {
    private configuration;
    private logger;
    private specs;
    private static hasCustomDisplaySpecStarted(processors);
    private suiteHierarchy;
    private suiteHierarchyDisplayed;
    private hasCustomDisplaySpecStarted;
    constructor(configuration: Configuration, logger: Logger, specs: ExecutedSpecs, displayProcessors: DisplayProcessor[]);
    jasmineStarted(suiteInfo: SuiteInfo): void;
    specStarted(result: CustomReporterResult): void;
    successful(result: CustomReporterResult): void;
    failed(result: CustomReporterResult): void;
    pending(result: CustomReporterResult): void;
    suiteStarted(result: CustomReporterResult): void;
    suiteDone(result: CustomReporterResult): void;
    private ensureSuiteDisplayed();
    private displaySuite(suite);
    private computeSuiteIndent();
}
