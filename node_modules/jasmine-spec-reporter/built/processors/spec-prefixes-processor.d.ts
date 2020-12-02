import { DisplayProcessor } from "../display-processor";
import { CustomReporterResult } from "../spec-reporter";
export declare class SpecPrefixesProcessor extends DisplayProcessor {
    displaySuccessfulSpec(spec: CustomReporterResult, log: string): string;
    displayFailedSpec(spec: CustomReporterResult, log: string): string;
    displayPendingSpec(spec: CustomReporterResult, log: string): string;
}
