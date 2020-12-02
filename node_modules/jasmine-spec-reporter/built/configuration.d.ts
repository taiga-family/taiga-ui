import { DisplayProcessor } from "./display-processor";
export declare class Configuration {
    suite?: {
        /**
         * display each suite number (hierarchical)
         */
        displayNumber?: boolean;
    };
    spec?: {
        /**
         * display error messages for each failed assertion
         */
        displayErrorMessages?: boolean;
        /**
         * display stacktrace for each failed assertion
         */
        displayStacktrace?: boolean;
        /**
         * display each successful spec
         */
        displaySuccessful?: boolean;
        /**
         * display each failed spec
         */
        displayFailed?: boolean;
        /**
         * display each pending spec
         */
        displayPending?: boolean;
        /**
         * display each spec duration
         */
        displayDuration?: boolean;
    };
    summary?: {
        /**
         * display error messages for each failed assertion
         */
        displayErrorMessages?: boolean;
        /**
         * display stacktrace for each failed assertion
         */
        displayStacktrace?: boolean;
        /**
         * display summary of all successes after execution
         */
        displaySuccessful?: boolean;
        /**
         * display summary of all failures after execution
         */
        displayFailed?: boolean;
        /**
         * display summary of all pending specs after execution
         */
        displayPending?: boolean;
        /**
         * display execution duration
         */
        displayDuration?: boolean;
    };
    /**
     * Colors are displayed in the console via colors package: https://github.com/Marak/colors.js.
     * You can see all available colors on the project page.
     */
    colors?: {
        /**
         * enable colors
         */
        enabled?: boolean;
        /**
         * color for successful spec
         */
        successful?: string;
        /**
         * color for failing spec
         */
        failed?: string;
        /**
         * color for pending spec
         */
        pending?: string;
    };
    prefixes?: {
        /**
         * prefix for successful spec
         */
        successful?: string;
        /**
         * prefix for failing spec
         */
        failed?: string;
        /**
         * prefix for pending spec
         */
        pending?: string;
    };
    stacktrace?: {
        /**
         * Customize stacktrace filtering
         */
        filter?(stacktrace: string): string;
    };
    /**
     * list of display processor to customize output
     * see https://github.com/bcaudan/jasmine-spec-reporter/blob/master/docs/customize-output.md
     */
    customProcessors?: Array<typeof DisplayProcessor>;
    /**
     * options for custom processors
     */
    customOptions?: any;
    /**
     * Low-level printing function, defaults to console.log.
     * Use process.stdout.write(log + '\n'); to avoid output to
     * devtools console while still reporting to command line.
     */
    print?: (log: string) => void;
}
