import { Logger } from './logger';
export declare class IndentLogger extends Logger {
    constructor(name: string, parent?: Logger | null, indentation?: string);
}
