import { CustomReporterResult } from "../../spec-reporter";
import { DisplayProcessor } from "../display-processor";
export declare class DefaultProcessor extends DisplayProcessor {
    private static displaySpecDescription(spec);
    displayJasmineStarted(): String;
    displaySuite(suite: CustomReporterResult): String;
    displaySuccessfulSpec(spec: CustomReporterResult): String;
    displayFailedSpec(spec: CustomReporterResult): String;
    displaySpecErrorMessages(spec: CustomReporterResult): String;
    displaySummaryErrorMessages(spec: CustomReporterResult): String;
    displayPendingSpec(spec: CustomReporterResult): String;
    private displayErrorMessages(spec, withStacktrace);
}
