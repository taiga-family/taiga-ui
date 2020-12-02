import { promise as wdpromise } from 'selenium-webdriver';
export declare class DeferredExecutor {
    execute: (command: any) => wdpromise.Promise<any>;
    defineCommand: (name: string, method: string, path: string) => void;
    /**
     * @param {!Promise<Executor>} delegate The promised delegate, which
     *     may be provided by any promise-like thenable object.
     */
    constructor(delegate: wdpromise.Promise<any>);
}
