import * as webdriver from 'selenium-webdriver';
export interface Data {
    sessionId: string;
    [key: string]: any;
}
export declare function buildMockDriver(sessionId: string, defineCallback: (name: string, method: string, path: string) => void, execCallback: (path: string, method: string, data: Data) => any): webdriver.WebDriver;
