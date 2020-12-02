import { promise as wdpromise } from 'selenium-webdriver';
import { Extender } from './extender';
export declare class CommandDefinition<T> {
    name: string;
    params: string[];
    method: 'GET' | 'POST' | 'DELETE' | 'PUT';
    path: string;
    private preprocessParams;
    constructor(name: string, params: string[], method: 'GET' | 'POST' | 'DELETE' | 'PUT', path: string, preprocessParams?: (...args: any[]) => any[]);
    compile<T>(extender: Extender, silentFailure: boolean): (...args: any[]) => wdpromise.Promise<T>;
}
