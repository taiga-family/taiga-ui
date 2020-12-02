import { SimpleWebDriverClient } from './simple_webdriver_client';
import { WebDriverCommand } from './webdriver_commands';
import { WebDriverBarrier } from './webdriver_proxy';
/**
 * A barrier that delays forwarding WebDriver commands that can affect the app (ie, clicks or
 * sending text) for a fixed amount of time. During the delay, the element that's the target
 * of the command will be highlighted by drawing a transparent div on top of it.
 */
export declare class HighlightDelayBarrier implements WebDriverBarrier {
    private client;
    delay: number;
    constructor(client: SimpleWebDriverClient, delay: number);
    private isHighlightCommand(command);
    private highlightData(top, left, width, height);
    private removeHighlightData();
    private sleep(delay);
    onCommand(command: WebDriverCommand): Promise<void>;
}
