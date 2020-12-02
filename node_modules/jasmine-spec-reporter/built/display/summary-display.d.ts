import { Configuration } from "../configuration";
import { ExecutionMetrics } from "../execution-metrics";
import { ExecutedSpecs } from "../spec-reporter";
import { Logger } from "./logger";
export declare class SummaryDisplay {
    private logger;
    private configuration;
    private specs;
    constructor(logger: Logger, configuration: Configuration, specs: ExecutedSpecs);
    display(metrics: ExecutionMetrics): void;
    private successesSummary();
    private successfulSummary(spec, index);
    private failuresSummary();
    private failedSummary(spec, index);
    private pendingsSummary();
    private pendingSummary(spec, index);
    private errorsSummary(errors);
    private errorSummary(error, index);
}
