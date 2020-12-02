/// <reference types="q" />
import * as q from 'q';
import { Config } from '../config';
import { DriverProvider } from './driverProvider';
export declare class BrowserStack extends DriverProvider {
    browserstackClient: any;
    constructor(config: Config);
    /**
     * Hook to update the BrowserStack job status.
     * @public
     * @param {Object} update
     * @return {q.promise} A promise that will resolve when the update is complete.
     */
    updateJob(update: any): q.Promise<any>;
    /**
     * Configure and launch (if applicable) the object's environment.
     * @return {q.promise} A promise which will resolve when the environment is
     *     ready to test.
     */
    protected setupDriverEnv(): q.Promise<any>;
}
