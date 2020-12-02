import { DisplayProcessor } from "../display-processor";
import { CustomReporterResult } from "../spec-reporter";
export declare class SpecDurationsProcessor extends DisplayProcessor {
    private static displayDuration(spec, log);
    displaySuccessfulSpec(spec: CustomReporterResult, log: string): string;
    displayFailedSpec(spec: CustomReporterResult, log: string): string;
}
