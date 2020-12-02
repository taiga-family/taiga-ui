import { CustomReporterResult } from "../../custom-reporter-result";
import { DisplayProcessor } from "../display-processor";
export declare class SpecDurationsProcessor extends DisplayProcessor {
    private static displayDuration(spec, log);
    displaySuccessfulSpec(spec: CustomReporterResult, log: String): String;
    displayFailedSpec(spec: CustomReporterResult, log: String): String;
}
