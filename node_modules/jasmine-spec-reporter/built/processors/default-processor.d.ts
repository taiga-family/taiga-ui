import { DisplayProcessor } from "../display-processor";
import { CustomReporterResult } from "../spec-reporter";
export declare class DefaultProcessor extends DisplayProcessor {
    private static displaySpecDescription(spec);
    displayJasmineStarted(): string;
    displaySuite(suite: CustomReporterResult): string;
    displaySuccessfulSpec(spec: CustomReporterResult): string;
    displayFailedSpec(spec: CustomReporterResult): string;
    displaySpecErrorMessages(spec: CustomReporterResult): string;
    displaySummaryErrorMessages(spec: CustomReporterResult): string;
    displayPendingSpec(spec: CustomReporterResult): string;
    private displayErrorMessages(spec, withStacktrace);
}
