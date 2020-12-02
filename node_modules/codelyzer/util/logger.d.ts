export declare class Logger {
    private readonly level;
    constructor(level: number);
    error(...msg: string[]): void;
    info(...msg: string[]): void;
    debug(...msg: string[]): void;
}
export declare const logger: Logger;
