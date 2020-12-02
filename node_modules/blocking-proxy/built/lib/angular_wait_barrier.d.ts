import { SimpleWebDriverClient } from './simple_webdriver_client';
import { WebDriverCommand } from './webdriver_commands';
import { WebDriverLogger } from './webdriver_logger';
import { WebDriverBarrier } from './webdriver_proxy';
/**
 * A barrier that uses Angular's Testability API to block commands until the application is stable.
 */
export declare class AngularWaitBarrier implements WebDriverBarrier {
    private client;
    rootSelector: string;
    enabled: boolean;
    logger: WebDriverLogger;
    constructor(client: SimpleWebDriverClient);
    /**
     * A CSS Selector for a DOM element within your Angular application.
     * BlockingProxy will attempt to automatically find your application, but it is
     * necessary to set rootElement in certain cases.
     *
     * In Angular 1, BlockingProxy will use the element your app bootstrapped to by
     * default.  If that doesn't work, it will then search for hooks in `body` or
     * `ng-app` elements (details here: https://git.io/v1b2r).
     *
     * In later versions of Angular, BlockingProxy will try to hook into all angular
     * apps on the page. Use rootElement to limit the scope of which apps
     * BlockingProxy waits for and searches within.
     *
     * @param rootSelector A selector for the root element of the Angular app.
     */
    setRootSelector(selector: string): void;
    private waitForAngularData();
    /**
     * Turn on WebDriver logging.
     *
     * @param logDir The directory to create logs in.
     */
    enableLogging(logDir: string): void;
    /**
     * Override the logger instance. Only used for testing.
     */
    setLogger(logger: WebDriverLogger): void;
    private sendRequestToStabilize(command);
    private shouldStabilize(command);
    onCommand(command: WebDriverCommand): Promise<void>;
}
