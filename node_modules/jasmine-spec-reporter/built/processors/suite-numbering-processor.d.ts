import { DisplayProcessor } from "../display-processor";
import { CustomReporterResult } from "../spec-reporter";
export declare class SuiteNumberingProcessor extends DisplayProcessor {
    private static getParentName(element);
    private suiteHierarchy;
    displaySuite(suite: CustomReporterResult, log: string): string;
    private computeNumber(suite);
    private computeHierarchy(suite);
    private computeHierarchyNumber();
}
