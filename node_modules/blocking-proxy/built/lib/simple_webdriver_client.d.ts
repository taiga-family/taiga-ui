/**
 * Super dumb and simple WebDriver client. Works with selenium standalone, may or may not work yet
 * directly with other drivers.
 */
export declare class SimpleWebDriverClient {
    seleniumAddress: string;
    constructor(seleniumAddress: string);
    /**
     * Send an execute script command.
     *
     * @param sessionId
     * @param data A JSON blob with the script and arguments to execute.
     */
    execute(sessionId: string, data: string): Promise<void>;
    /**
     * Send an execute async script command.
     *
     * @param sessionId
     * @param data A JSON blob with the script and arguments to execute.
     */
    executeAsync(sessionId: string, data: string): Promise<void>;
    /**
     * Get the location of an element.
     *
     * @param sessionId
     * @param elementId
     * @returns Promise<{}> A promise that resolves with the x and y coordinates of the element.
     */
    getLocation(sessionId: string, elementId: string): Promise<void>;
    /**
     * Get the size of an element.
     *
     * @param sessionId
     * @param elementId
     * @returns Promise<{}> A promise that resolves with the height and width of the element.
     */
    getSize(sessionId: string, elementId: string): Promise<void>;
    private createSeleniumRequest(method, messageUrl, data?);
}
