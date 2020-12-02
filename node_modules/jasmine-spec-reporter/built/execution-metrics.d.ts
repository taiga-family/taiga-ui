/// <reference types="jasmine" />
import { CustomReporterResult } from "./spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;
import RunDetails = jasmine.RunDetails;
export declare class ExecutionMetrics {
    private static pluralize(count);
    successfulSpecs: number;
    failedSpecs: number;
    pendingSpecs: number;
    skippedSpecs: number;
    totalSpecsDefined: number;
    executedSpecs: number;
    globalErrors: CustomReporterResult[];
    duration: string;
    random: boolean;
    seed: string;
    private startTime;
    private specStartTime;
    start(suiteInfo: SuiteInfo): void;
    stop(runDetails: RunDetails): void;
    startSpec(): void;
    stopSpec(result: CustomReporterResult): void;
    private formatDuration(durationInMs);
}
