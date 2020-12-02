/// <reference types="q" />
import * as q from 'q';
import { Config } from '../config';
import { DriverProvider } from './driverProvider';
export declare class Sauce extends DriverProvider {
    sauceServer_: any;
    constructor(config: Config);
    /**
     * Hook to update the sauce job.
     * @public
     * @param {Object} update
     * @return {q.promise} A promise that will resolve when the update is complete.
     */
    updateJob(update: any): q.Promise<any>;
    /**
     * Configure and launch (if applicable) the object's environment.
     * @public
     * @return {q.promise} A promise which will resolve when the environment is
     *     ready to test.
     */
    protected setupDriverEnv(): q.Promise<any>;
    /**
     * Get the Sauce Labs endpoint
     * @private
     * @param {string} region
     * @return {string} The endpoint that needs to be used
     */
    private getSauceEndpoint(region);
}
