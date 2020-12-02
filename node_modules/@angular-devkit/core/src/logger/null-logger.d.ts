import { Logger, LoggerApi } from './logger';
export declare class NullLogger extends Logger {
    constructor(parent?: Logger | null);
    asApi(): LoggerApi;
}
