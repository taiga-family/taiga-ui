/// <reference types="q" />
import * as q from 'q';
import { WebDriver } from 'selenium-webdriver';
import { Config } from '../config';
import { DriverProvider } from './driverProvider';
export declare class MockExecutor {
    execute(command: any): any;
}
export declare class Mock extends DriverProvider {
    constructor(config?: Config);
    /**
     * An execute function that returns a promise with a test value.
     */
    execute(): q.Promise<any>;
    /**
     * Configure and launch (if applicable) the object's environment.
     * @public
     * @return {q.promise} A promise which will resolve immediately.
     */
    protected setupDriverEnv(): q.Promise<any>;
    /**
     * Create a new driver.
     *
     * @public
     * @override
     * @return webdriver instance
     */
    getNewDriver(): WebDriver;
}
