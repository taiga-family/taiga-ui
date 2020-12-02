import { CustomReporterResult } from "../../spec-reporter";
import { DisplayProcessor } from "../display-processor";
export declare class SpecColorsProcessor extends DisplayProcessor {
    displaySuccessfulSpec(spec: CustomReporterResult, log: String): String;
    displayFailedSpec(spec: CustomReporterResult, log: String): String;
    displayPendingSpec(spec: CustomReporterResult, log: String): String;
}
