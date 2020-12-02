import { CustomReporterResult } from "../../custom-reporter-result";
import { DisplayProcessor } from "../display-processor";
export declare class SpecPrefixesProcessor extends DisplayProcessor {
    displaySuccessfulSpec(spec: CustomReporterResult, log: String): String;
    displayFailedSpec(spec: CustomReporterResult, log: String): String;
    displayPendingSpec(spec: CustomReporterResult, log: String): String;
}
