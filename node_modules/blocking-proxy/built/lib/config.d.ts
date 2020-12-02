export interface Config {
    help?: boolean;
    fork?: boolean;
    highlightDelay?: string;
    seleniumAddress?: string;
    logDir?: string;
    port?: number;
}
export declare function processArgs(argv: string[]): Config;
export declare function printHelp(): void;
