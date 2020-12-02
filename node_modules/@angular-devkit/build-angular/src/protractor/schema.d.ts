/**
 * Protractor target options for Build Facade.
 */
export interface Schema {
    /**
     * Base URL for protractor to connect to.
     */
    baseUrl?: string;
    /**
     * Dev server target to run tests against.
     */
    devServerTarget?: string;
    /**
     * Start Protractor's Element Explorer for debugging.
     * @deprecated This option has no effect. See:
     * https://github.com/angular/protractor/blob/master/docs/debugging.md#enabled-control-flow
     * for alternative methods.
     */
    elementExplorer?: boolean;
    /**
     * Execute specs whose names match the pattern, which is internally compiled to a RegExp.
     */
    grep?: string;
    /**
     * Host to listen on.
     */
    host?: string;
    /**
     * Invert the selection specified by the 'grep' option.
     */
    invertGrep?: boolean;
    /**
     * The port to use to serve the application.
     */
    port?: number;
    /**
     * The name of the Protractor configuration file.
     */
    protractorConfig: string;
    /**
     * Override specs in the protractor config.
     */
    specs?: string[];
    /**
     * Override suite in the protractor config.
     */
    suite?: string;
    /**
     * Try to update webdriver.
     */
    webdriverUpdate?: boolean;
}
