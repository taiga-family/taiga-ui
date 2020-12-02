export interface MinimistArgs {
    [opt: string]: string[];
}
export interface Args {
    [opt: string]: number | string | boolean;
}
export interface Options {
    [opt: string]: Option;
}
export declare class Option {
    opt: string;
    description: string;
    type: string;
    defaultValue: number | string | boolean;
    value: number | string | boolean;
    constructor(opt: string, description: string, type: string, defaultValue?: number | string | boolean);
    getValue_(): number | string | boolean;
    getNumber(): number;
    getString(): string;
    getBoolean(): boolean;
}
export declare function unparseOptions(options: Options): string[];
